var http = require('http');
var url  = require('url');

//query tools
var index = require('./index.js');
var querystring = require('querystring');

function pictureHandler(request, response){ //do we want to return an array/whatever of images??
  response.writeHead(200, { 'Content-Type' : 'text/location'});

  var images;
  var that = this;

  index.getPictures(new function(err, data){
    if (err) {
      throw err;
    }
    else {
      console.log(data);
      images = data;
      that.emit('ready');
  }});
  
  this.on('done', function (data) {
    console.log(images);
    console.log(JSON.stringify(images));
    response.write(JSON.stringify(images));
    response.end;
  });
}

if (process.argv.length < 3) {
  console.log('usage: node http-server.js [pokemon]');
  process.exit(1);
}

var handlerType = process.argv[2];
if (!(handlerType === 'pokemon')) {
  console.log('usage: node http-server.js [pokemon]');
  process.exit(1); 
}

var server = null;

switch (handlerType) {
  case 'pokemon':
    server = http.createServer(pictureHandler);
    break;
  default:
    throw new Error('invalid handler type!');
}

server.listen(3000);
console.log('Server is listening!');
