var pg = require('pg');

var connString = 'postgres://student:student@localhost/student'; //this might be wrong

//'that' refers to the server's queryHandler function. index.js tells that to emit 'ready' when it can get the most recent query
//this all had to be done to bypass javascript's asyncronous flow "feature"

function getPictures(callback, that){
  pg.connect(connString, function(err, client, done){
    if(err){
      callback(err, undefined, that);
    }
    else{
      client.query('select * from pictures P', function(err, result){
        done();
        client.end();
        if(err){
          callback(err, undefined, that);
        }
        else{
          callback(undefined, result.rows, that);
        }
      })
    }
  })
}

exports.getPictures = getPictures;