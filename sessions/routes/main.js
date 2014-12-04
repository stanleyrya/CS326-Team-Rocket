var express = require('express');
var router = express.Router();

var online = {};

router.get('/', function(req,res){
	res.render('gameLogin2');
});

router.post('/change', function(req,res){
	res.redirect('/main/login');
});

router.get('/login', function(req, res){
  //var authmessage = req.flash('auth') || '';

  var user  = req.session.user;

  if (user !== undefined && online[user.uid] !== undefined) {
    res.redirect('/main/home');
  }
  else{
  	res.render('gameLogin');
  }
});

// ## auth
// Performs **basic** user authentication.
router.post('/auth', function(req, res) {
  // TDR: redirect if logged in:
  var user = req.session.user;

  if (user !== undefined && online[user.uid] !== undefined) {
    res.redirect('/main/home');
  }
  else {
    // Pull the values from the form.
    var username = req.body.username;
    var password = req.body.password;
    // Perform the user lookup.
	var client = require('../lib/db/client.js');
	client.getData('lookup,'+username+','+password,function(user){
		console.log(user);
		if(user === 'error'){
			//req.flash('auth', error);
        	res.redirect('/main/login');
    	}
    	else {
        // Store the user in our in memory database.
        online[user.uid] = user;
        req.session.user = user;
        res.redirect('/main/home');
        }
	});
  }
});

// ## logout
// Deletes user info & session - then redirects to login.
router.get('/logout', function(req, res) {
  var user = req.session.user;
  handleLoginStatus(req,res);

  if (online[user.uid] !== undefined) {
    delete online[user.uid];
  }

  delete req.session.user;
  res.redirect('/main/login');
});

router.get('/home', function(req,res){
	handleLoginStatus(req,res);
	var user = req.session.user;
	console.log('is user working ' + online[user.uid]);
	console.log('about to print this' + JSON.parse(online[user.uid])[0].fname);
	res.render(JSON.parse(online[user.uid])[0].fname);

});

router.get('/SquirtleLover', function(req,res){
	handleLoginStatus(req,res);
	res.render('squirtlelover');
});

router.get('/Yugioh', function(req,res){
	handleLoginStatus(req,res);
	res.render('yugioh');
});

router.get('/endgame', function(req,res){
	res.render('endgame');
})

router.get('/online', function(req,res){
	handleLoginStatus(req,res);
	res.render('online');
});

router.post('/auth1', function(req,res){
	res.redirect('/main/newuser');
});

router.get('/game', function(req,res){
	handleLoginStatus(req,res);
	var client = require('../lib/db/client.js');
	client.getData('pictures',function(data){
		console.log(data);
		res.render('game',{pokemon : JSON.parse(data)});
	})
});

router.get('/pickpokemon', function(req,res){
	handleLoginStatus(req,res);
	var client = require('../lib/db/client.js');
	client.getData('pictures',function(data){
		console.log(data);
		res.render('pickpokemon',{pokemon : JSON.parse(data)});
	})
});

router.get('/gameState', function(req,res){
	handleLoginStatus(req,res);
	var client = require('../lib/db/client.js');
	client.getData('gameState',function(data){
		console.log(data);
		if(data !== 'running'){
			res.send('/main/endgame');
		}
	})
});

router.get('/chat', function(req,res){
	handleLoginStatus(req,res);
	res.render('chat');
});

module.exports = router;

function handleLoginStatus(req,res){
  var user = req.session.user;
  if (user === undefined || online[user.uid] === undefined) {
    //req.flash('auth', 'Not logged in!');
    res.redirect('/main/login');
    return;
  }
}
