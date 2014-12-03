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

router.get('/SquirtleLover', function(req,res){
	res.render('squirtlelover');
});

router.get('/Yugioh', function(req,res){
	res.render('yugioh');
});

router.get('/online', function(req,res){
	res.render('online');
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

router.get('/chat', function(req,res){
	res.render('chat');
});

module.exports = router;