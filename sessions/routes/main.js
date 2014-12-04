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
	// var client = require('../lib/db/client.js');
	// client.setData(function(data){
	// 	res.render('game',{pokemon : null});
	// });

	client(function(data){
		console.log(data);
		res.render('game',{pokemon : data});
	});

	// client.getData();
	// res.render('game');
});

router.get('/chat', function(req,res){
	res.render('chat');
});

module.exports = router;


//---------------------------------------------------------------------
var client = function(cb){
	var Url = require('url');
	var http = require('http');
	var options;

	// The url to connect to:
	var urlStr = 'http://localhost:5000';

	var url = Url.parse(urlStr);

	options = {
	    host: url.hostname,
	    path: url.path,
	    port: url.port || 80,
	    method: 'GET'
	};

	//just something that prompt needs
	function onErr(err) {
	  console.log(err);
	  return 1;
	}

	/**
	 * A function to create a response handler.
	 */
	function createResponseHandler (callback) {
	  /**
	   * A function to handle a response.
	   */
	  function responseHandler(res) {
	    // A variable to capture the data from the response:
	    var str = '';

	    // When data is received we append to string.
	    res.on('data', function (chunk) {
	      str += chunk;
	    });

	    // When the connection is closed, we invoke our callback.
	    res.on('end', function () {
	      callback(str);
	    });
	  }

	  // Return the created function:
	  return responseHandler;
	}

	var req = http.request(options, createResponseHandler(function (data) {
	  cb(data);
	}));
	req.end();
}