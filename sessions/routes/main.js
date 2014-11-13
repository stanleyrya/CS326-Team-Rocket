var express = require('express');
var router = express.Router();


router.get('/', function(req,res){
	res.render('gameLogin2',{ title : "Guess Who"});
});

router.post('/change', function(req,res){
	res.redirect('/main/login2');
});

router.get('/login2', function(req,res){
	res.render('gameLogin', {title : "Guess Who"});
});
module.exports = router;