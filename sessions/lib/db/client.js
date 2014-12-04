var Url = require('url');
var http = require('http');
var options;

// The url to connect to:
var urlStr = 'http://localhost:5000';

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

function getData(callback){
  var req = http.request(options, createResponseHandler(function (data) {
    callback(data);
  }));
  req.end();
}

exports.getData = getData;