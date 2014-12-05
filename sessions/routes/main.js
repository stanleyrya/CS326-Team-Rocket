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
		if(user === 'error'){
        	res.redirect('/main/login');
    	}
    	else {
        // Store the user in our in memory database.
        //console.log('auth: 1 ' + JSON.parse(online[user.uid]));
        //user[0] = user;
        user = JSON.parse(user);
        console.log(user.uid);
        req.session.user = user;
        online[user.uid] = user;
        console.log('auth: 2 ' + online[user.uid]);
        res.redirect('/main/home');
    }

        // console.log('FUCK THIS: ' + fake.uid);
        // req.session.user = fake;
        // online[fake.uid] = fake;
        // console.log(online[3]);
        // console.log('auth: 2 ' + online[fake.uid]);
        // res.redirect('/main/home');
        // }
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
	var user = req.session.user;
	handleLoginStatus(req,res);
	res.render(online[user.uid].fname);

});

router.get('/endgame', function(req,res){
	handleLoginStatus(req,res);
	res.render('endgame');
});

router.get('/online', function(req,res){
	handleLoginStatus(req,res);
	res.render('online');
});


router.post('/game/start', function(req,res){
	console.log(JSON.stringify(req.data));

	var data;
	var i = 0;
	var realName;
    var name;
	JSON.parse(JSON.stringify(req.body),function(k,v){
		console.log('this is v: ' + v);
		if(i == 0){
			realName = v;
		}
		if(i == 1){
			name = v;
		}
		i++;
	});

	console.log('realName ' + realName);
	console.log('name ' + name);

	//hardcodeing
	var user = req.session.user;
	user = online[user.uid];

	if(user.fname === 'SquirtleLover') {
		user['friend'] = 'Yugiohfan';
	}
	else{
		user['friend'] = 'SquirtleLover';
	}
	user['chosen'] = realName;
	user['chosenimage'] = name;

	console.log('fake: '+JSON.stringify(user));
});

router.get('/game',function(req,res){

	var user = req.session.user;
	user = online[user.uid];
	handleLoginStatus(req,res);
	var client = require('../lib/db/client.js');
	client.getData('pictures',function(d){
		console.log(d);
		res.render('game',{pokemon : JSON.parse(d),
							pickPokemon :online[user.uid],
							  user : user});
	})
});

router.get('/pickpokemon', function(req,res){
	handleLoginStatus(req,res);
	var client = require('../lib/db/client.js');
	client.getData('pictures',function(data){
		console.log('picture objects: ' + data);
		res.render('pickpokemon',{pokemon : JSON.parse(data)});
								  
	})
});

router.get('/chat', function(req,res){
	//hardcodeing
	var user = req.session.user;
	user = online[user.uid];
	if(user.fname === 'SquirtleLover') user['friend'] = 'Yugiohfan';
	else user['friend'] = 'SquirtleLover';

	console.log('trying to access chat');
	handleLoginStatus(req,res);
	//var user = req.session.user;
	console.log(user);
	res.render('realChat',{user : user});
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
