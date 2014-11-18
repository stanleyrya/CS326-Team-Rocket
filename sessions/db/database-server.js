var http = require('http');
var url  = require('url');

//query tools
var index = require('./index.js');
var querystring = require('querystring');

function pictureHandler(request, response){ //do we want to return an array/whatever of images??
  response.writeHead(200, { 'Content-Type' : 'images/png'});

  var obj = {
    host : request.headers.host,
    url : request.url
  };

  images = obj;
  response.write(obj);
  response.end;
}

function queryHandler(request, response){

  response.writeHead(200, { 'Content-Type' : 'text/json' });
  var data;

  var query = querystring.parse(request.url.split('?')[1]); //parse the querystring from the url

  //for use with on "ready". This helps dealing with javascript's asyncronous flow
  var that = this; //The emitter for "ready" is inside index.js, in each callback function

  switch (query.command) {
  case 'usa':
    data = index.getUsersWithAddress(index.jsonData, that);
    break;
  case 'ua':
    data = index.getUserWithAddress(query.fname, query.lname, index.jsonData, that);;
    break;
  case 'u':
    data = index.getUsers(index.jsonData, that);
    break;
  case 'n':
    data = index.getUsers(index.jsonData, that);
    break;
  case 'p':
    data = index.updatePassword(query.fname, query.lname, query.passwd, index.jsonData, that);
    break;
  case 'c':
    data = index.createUser(query.uid, query.fname, query.lname, query.passwd, query.age, index.jsonData, that);
    break;
  default:
    console.log("I don't know what you mean: " + query.command);
    process.exit(1);
  }

  this.on('ready', function(){
    data = index.getRecentRequest(); //to help with asyncronous flow problems. Gets the most recent request to index.js
    response.write(data);
    response.end();
  });
}

//return javascript array of objects from CSV
function FileReader(file) {
  if (file === null) {
    throw new Error('file must be non-null');
  }

  if (file === undefined) {
    throw new Error('file must be defined');
  }

  this.file = file;

  var that = this;
  
  this.on('read', function () {
    fs.readFile(file, function (err, data) {
      var objectArray = [];
      var allLines = data.toString().split('\n');
      var headers = allLines[0].toString().split(',');
      objectArray.push(headers);
      for(var i=1; i<allLines.length; i++){
        var line = allLines[i].toString().split(',');
        var person = { fName : line[0], lName : line[1], uid:line[2], phone:line[3], address:line[4]};
        objectArray.push(person);
      }
      data = objectArray;
      that.emit('done', data);
    });
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

server.listen(4000);
console.log('Server is listening!');
