/*var http = require('http');\

//query tools
var index = require('./index.js');

function pictureHandler(request, response){ //do we want to return an array/whatever of images??
  response.writeHead(200, { 'Content-Type' : 'text/location'});

  var images;
  var that = this;

  index.getPictures(function(err, data){
    if (err) {
      throw err;
    }
    else {
      console.log(data);
      images = data;
      that.emit('ready');
  }});
  
  this.on('done', function (data) {
    console.log(JSON.stringify(images));
    response.write(JSON.stringify(images));
    response.end;
  });
}
var server = http.createServer(pictureHandler);
server.listen(5000);
console.log('Server is listening!');*/
////////////////////////////////////////////////////////////////////
var http = require('http');
var pg = require('pg');

var conString = "postgres://student:student@localhost/student";

var server = http.createServer(function(req, res) {

  // get a pg client from the connection pool
  pg.connect(conString, function(err, client, done) {

    var handleError = function(err) {
      // no error occurred, continue with the request
      if(!err) return false;

      // An error occurred, remove the client from the connection pool.
      // A truthy value passed to done will remove the connection from the pool
      // instead of simply returning it to be reused.
      // In this case, if we have successfully received a client (truthy)
      // then it will be removed from the pool.
      done(client);
      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('An error occurred');
      return true;
    };

    client.query('select name from pokemon P', function(err, result) {

      // handle an error from the query
      if(handleError(err)) return;

      done();
      res.writeHead(200, {'content-type': 'text/json'});
      var pictures = JSON.stringify(result.rows);
      console.log(pictures);
      res.end(pictures);
    });
  })
});

server.listen(5000);
console.log('Server is listening!');