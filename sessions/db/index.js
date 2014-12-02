var pg = require('pg');

var connString = 'postgres://student:student@localhost/student'; //this might be wrong

//'that' refers to the server's queryHandler function. index.js tells that to emit 'ready' when it can get the most recent query
//this all had to be done to bypass javascript's asyncronous flow "feature"

function getPictures(callback){
  console.log("getPictures");
  pg.connect(connString, function(err, client, done){
    if(err){
      console.log("getPictures - if  ");
      callback(err, undefined);
    }
    else{
      console.log("getPictures - else  ");
      client.query('select * from pictures P', function(err, result){
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

//callback function
//'data' is just an array of users/objects. Each 'user' in this case has fname, lname, street, zip, etc.....
function locationHandler(err, data){
  if (err) {
    throw err;
  }
  else {
    return data;
  }
}