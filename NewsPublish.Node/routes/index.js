var express = require('express');
var router = express.Router();
var sql = require('mysql');
var connection = sql.createConnection({
	host: 'localhost',
	user: 'newspublish',
	password: '19971102',
	database: 'newsplatform'
});
connection.connect();
router.get('/', function(req, res, next) {
	connection.query('select * from newsplatform.news,newsplatform.editor where editor.ideditor=news.editor', function (error, results, fields) {
		var articles = [];
		if (!error) {
			for (var a of results) {
				articles.push({
					"id": a.idnews,
					"title": a.title,
					"editor":a.editorName,
					"content": a.content,
					"time": String(a.publishTime).substr(0, 16)
				});
			}
			res.render('index', {
				"search": true,
				"article": articles
			});
		}
		else {
			res.render('index', {
				"error": true,
				"e":error
			});
		}
	});
});

router.get('/article', function (req, res) {
	connection.query('select title,editorName,content from newsplatform.news,newsplatform.editor where editor.ideditor=news.editor and news.idnews=' + req.query.id, function (error, result, fields) {
		res.render('index',{
			"singlearticle": true,
			"title": result[0].title,
			"editor": result[0].editorName,
			"content": result[0].content
		});
	});
});

router.get('/search', function (req, res) {
	connection.query('select * from newsplatform.news,newsplatform.editor where editor.ideditor=news.editor', function (error, results, fields) {
		var articles = [];
		if (!error) {
			for (var a of results) {
				var t = a.title + a.content;
				if (t.search(req.query.text)!=-1) {
					articles.push({
						"id": a.idnews,
						"title": a.title,
						"editor": a.editorName,
						"content": a.content,
						"time": String(a.publishTime).substr(0, 16)
					});
				}	
			}
			if(articles.length!=0){
			res.render('index', {
				"search": true,
				"text": req.query.text,
				"article": articles
				});
			}
			else {
				res.render('index', {
					"search": true,
					"text": req.query.text,
					"error": true,
					"e": "找不到符合的文章"
				});
			}
		}
		else {
			res.render('index', {
				"error": true,
				"e": error
			});
		}
	});
});

module.exports = router;