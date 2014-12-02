var Url = require('url');
var http = require('http');
var options; //add this in! otherwise the "continueFunction" function wont be able to see it :(

//important for sending query to server
var querystring = require('querystring');

if (process.argv.length < 3) {
  console.log('usage: node http-client.js [pokemon]');
  process.exit(1);
}

// The handler function to invoke:
var handlerType = process.argv[2];

if (!(handlerType === 'pokemon')) {
  console.log('usage: node http-client.js [pokemon]');
  process.exit(1);  
}

// The url to connect to:
var urlStr = 'http://localhost:3000';

var url = Url.parse(urlStr);
options = {
    host: url.hostname,
    path: url.path,
    port: url.port || 80,
    method: 'GET'
};

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

var handler = createResponseHandler(function (data) {
  console.log(data);
});

var json_handler = createResponseHandler(function (data) {
  var obj = JSON.parse(data);
  console.log(obj);
});

console.log(' --> connecting to ' + options.host + ' on port ' + options.port);
console.log(' --> resource ' + options.path);

switch (handlerType) {
  case 'pokemon':
    var req = http.request(options, handler);
    req.end();
    break;
  default:
    console.log('unknown handler type');
}


