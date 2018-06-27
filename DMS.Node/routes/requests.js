var express = require('express');
var router = express.Router();
var sql = require('mysql');
var connection = sql.createConnection({
	host: 'localhost',
	user: 'dms',
	password: '1234',
	database: 'dormitory'
});
connection.connect();

router.get( '/', function ( req, res, next ) {
	let loginstate = ( req.session.userID == "manager" )
	res.render('requests', {
		title: "宿舍管理系统-申请选择",
		home: 1,
		logged: loginstate
	});
});
router.get('/repair', function (req, res, next) {
	let loginstate = ( req.session.userID == "manager" )
	res.render('requests', {
		title: "宿舍管理系统-维修申请",
		repair: 1,
		logged: loginstate,
		repairdetail: [{
			id: 1,
			name: "李四",
			room: "606",
			item: "日光灯",
			reason:"灯管烧坏了"
		}]
	});
});
router.get('/visit', function (req, res, next) {
	let loginstate = ( req.session.userID == "manager" )
	res.render('requests', {
		title: "宿舍管理系统-访客申请",
		visitor: 1,
		logged: loginstate,
		visitordetail: [{
			id: 1,
			name: "张三",
			arrive: "2018/01/01 12:00",
			leave: "2018/01/01 13:00",
			contact: "13012341234",
			reason:"看望学生"
		}]
	});
});

module.exports = router;