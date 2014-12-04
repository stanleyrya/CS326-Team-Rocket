var http = require('http');
var pg = require('pg');
var querystring = require('querystring');

var conString = "postgres://student:student@localhost/student";

var server = http.createServer(function(req, res) {

  var query = querystring.parse(req.url.split('?')[1]);
  query = query.command.split(',');

  switch(query[0]){
    case 'pictures':
      getPictures(res);
      break;
    case 'endGame':
      endGame(res);
      break;
    case 'gameState':
      gameState(res);
      break;
    case 'lookup':
      lookup(query[1],query[2],res);
      break;
    default:
      console.log('Wrong query: ' + query);
      process.exit(1);
  }
});

function getPictures(res){
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
      game = 'running';
      res.end(pictures);
    });
  })
}

var game;

function endGame(res){
  game = 'over';
  res.writeHead(500, {'content-type': 'text/plain'});
  res.end('GAME OVER!');
  console.log('end game');
}

function gameState(res){
  res.writeHead(500, {'content-type': 'text/plain'});
  res.end(game);
  console.log('Game State: '+ game);
}

function lookup(fname,password,res){
  console.log('fname: ' + fname + '  password: ' + password);
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

    client.query('select * from users where fname=$1 and password=$2', ['Jessie','Rocket'],function(err, result) {

      // handle an error from the query
      if(handleError(err)) return;

      done();
      res.writeHead(200, {'content-type': 'text/json'});
      var user = JSON.stringify(result.rows);
      //assume that we got the correct one
      console.log(user);
      res.end(user);
    });
  })
}

server.listen(5000);
console.log('Server is listening!');