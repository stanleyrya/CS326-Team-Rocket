var express = require('express');
var router = express.Router();


router.get('/', function(req,res){
	res.render('gameLogin2');
});

router.post('/change', function(req,res){
	res.redirect('/main/login');
});

router.get('/login', function(req,res){
	res.render('gameLogin');
});

router.post('/auth', function(req,res){
	res.redirect('/main/home');
});

router.get('/home', function(req,res){
	res.render('home');

});

router.post('/auth1', function(req,res){
	res.redirect('/main/newuser');
});

router.get('/newuser', function(req,res){
	res.render('newuser');
});

router.get('/game', function(req,res){
	res.render('game');
});


module.exports = router;