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
	var client = require('../lib/db/client.js');
	client.getData('pictures',function(data){
		console.log(data);
		res.render('game',{pokemon : JSON.parse(data)});
	})
});

router.get('/chat', function(req,res){
	res.render('chat');
});

module.exports = router;