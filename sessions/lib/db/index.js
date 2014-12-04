var pg = require('pg');

var connString = 'postgres://student:student@localhost/student';

function getPictures(callback){
  console.log("getPictures");
  pg.connect(connString, function(err, client, done){
    if(err){
      console.log("getPictures - if  ");
      callback(err, undefined);
    }
    else{
      console.log("getPictures - else  ");
      client.query('select name from pokemon P', function(err, result){
        done();
        client.end();
        console.log("getPictures - else  query");
        if(err){
          callback(err, undefined);
        }
        else{
          callback(undefined, result.rows);
        }
      })
    }
  })
}

exports.getPictures = getPictures;