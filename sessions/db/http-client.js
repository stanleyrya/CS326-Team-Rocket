var Url = require('url');
var http = require('http');
var options; //add this in! otherwise the "continueFunction" function wont be able to see it :(

//important for prompting/sending prompt to server
var prompt = require('prompt');
var querystring = require('querystring');

if (process.argv.length < 3) {
  console.log('usage: node http-client.js [h|rh|json|csv] [url]');
  process.exit(1);
}

// The handler function to invoke:
var handlerType = process.argv[2];

// The url to connect to:
var urlStr = process.argv[3] || 'http://localhost:4000';

if (!(handlerType === 'h' || handlerType === 'rh' || handlerType === 'json' || handlerType === 'csv')) {
  console.log('usage: node http-client.js [h|rh|json|csv] [url]');
  process.exit(1);  
}

//Let's use prompt and figure out what the user wants!! :)
var query = {};

prompt.start();
prompt.get(['command', 'fname', 'lname', 'password', 'age', 'uid'], function (err, result) { //fname, etc... can be empty if they aren't needed
  if (err) { return onErr(err); }
  query.command = result.command;
  query.fname = result.fname;
  query.lname = result.lname;
  query.password = result.password;
  query.age = result.age;
  query.uid = result.uid;

  urlStr += '?' + querystring.stringify(query); //turn what the user input into a 'querystring', then add to the url

  //stuff from before/richards
  var url = Url.parse(urlStr);

  options = {
    host: url.hostname,
    path: url.path,
    port: url.port || 80,
    method: 'GET'
  };

  //we call the other parts of the script AFTER prompt, so we can actually input stuff!
  continueExecution();
});

//just something that prompt needs
function onErr(err) {
  console.log(err);
  return 1;
}

/**
 * A function to create a response handler.
 */
function createResponseHandler (callback) {
  /**
   * A function to handle a response.
   */
  function responseHandler(res) {
    // A variable to capture the data from the response:
    var str = '';

    // When data is received we append to string.
    res.on('data', function (chunk) {
      str += chunk;
    });

    // When the connection is closed, we invoke our callback.
    res.on('end', function () {
      callback(str);
    });
  }

  // Return the created function:
  return responseHandler;
}

// Create a basic handler:
var handler = createResponseHandler(function (data) {
  console.log(data);
});

// A slightly more interesting handler:
var re_handler = createResponseHandler(function (data) {
  var lines = data.split("\n");

  console.log('Found Links:');
  var re = /<a +href="([^"]+)".*>/; // <a href="URL">link text</a>
  lines.forEach(function (line) {
    var match = re.exec(line);

    if (match !== null) {
      console.log(match[1]);
    }
  });
});

// Even more interesting:
var json_handler = createResponseHandler(function (data) {
  var obj = JSON.parse(data);
  console.log(obj);
});

//this probably isnt correct
var csv_handler = createResponseHandler(function (data) {
  var obj = JSON.parse(data); //parse JSON into javascript objects
  console.log(obj);
  var csv = objectToCSV(obj); //don't know what do to with it otherwise
  //console.log(csv);
})

function objectToCSV(data) {
  var csv = '';
  for (var i=0; i<data.length; i++) {
    var line = '';
    for (var index in data[i]) {
      if (line != '') line = ',';
      line += data[i][index];
    }
    csv += line + '\n';
  }
  return csv;
}

//Had to turn the rest of the script into a function that we can call AFTER prompt
function continueExecution(){
  console.log(' --> connecting to ' + options.host + ' on port ' + options.port);
  console.log(' --> resource ' + options.path);

  switch (handlerType) {
    case 'h':
      var req = http.request(options, handler);
      req.end();
      break;
    case 'rh':
      var req = http.request(options, re_handler);
      req.end();
      break;
    case 'json':
      var req = http.request(options, json_handler);
      req.end();
      break;  
    case 'csv':
      var req = http.request(options, csv_handler);
      req.end();
      break;
    default:
      console.log('unknown handler type');
  }
}


