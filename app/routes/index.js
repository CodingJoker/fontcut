var express = require('express');
var trans = require('../font-carrier/test/index.js');
var fs = require('fs');
var router = express.Router();

router.post('/', function(req, res, next) {
	var str = req.body.block_content;
	var id  = req.body.article_id;
	// var str = req.query.name;
	trans.do(str,id);
	console.log("str ："+str);
	console.log("id ："+id);
	res.set('Content-Type', 'application/octet-stream');
	var temp = fs.createReadStream('./font-carrier/test/temp/'+id+'.ttf');
	temp.pipe(res);
});

module.exports = router;
