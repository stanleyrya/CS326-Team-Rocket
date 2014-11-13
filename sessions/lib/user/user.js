// # User Library

// ## User Objects
function User(username, password, uid, admin) {
  this.username = username;
  this.password = password;
  // Added uid
  this.uid      = uid;
  //new field added to determine if user is an admin
  this.admin = admin;
}


// This is our stub database until we look at a real database!
var userdb = [
  new User('tim',   'mit', 1, 'normal'),
  new User('hazel', 'lezah', 2,'normal'),
  new User('caleb', 'belac', 3,'normal'),
  new User('admin', 'javascript', 4, 'admin'),
  new User('admin1','java', 5, 'admin'),
];


//
// ## lookup function
// locates a user by `name` if it exists. Invokes callback `cb` with the
// signature cb(error, userobj).
//
exports.lookup = function(username, password, cb) {
  var len = userdb.length;
  for (var i = 0; i < len; i++) {
    var u = userdb[i];
    if (u.username === username) {
      if (u.password === password) {
        cb(undefined, u);
      }
      else {
        cb('password is not correct');
      }
      return;
    }
  }
  cb('user not found');
};

//adds a new user to the database, method to be used by admin.js
exports.addNewUser = function(username, password,admin, cb){
  var len = userdb.length;
  for(var i = 0; i <len; i++){
    var u = userdb[i];
    if(u.username === username)
      cb('user already exists',u);

  }
  if(admin === 'yes')
    userdb[len] = new User(username,password,len,'admin');
  else
    userdb[len] = new User(username,password,len,'normal');
  
  cb(undefined,userdb[len]);
    
  

};


