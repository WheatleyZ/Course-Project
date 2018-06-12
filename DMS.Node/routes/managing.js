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

router.get('/', function (req, res, next) {
	res.render('managing', {
		title: "宿舍管理系统",
		managing: 1,
		room: [ {
			id: 1,
			roomname: "Lorem Ipsum",
			dormno: "6",
			roomno: "606",
			roomcount: "4",
			repairrequest: 2,
			repairitem: [
				"日光灯", "下水道"
			],
			student: [ {
				num: 1,
				name: "Mark",
				id: 0001,
				gender: "男"
			}, {
				num: 2,
				name: "Jacob",
				id: 0002,
				gender: "男"
			}, {
				num: 3,
				name: "Larry",
				id: 0003,
				gender: "女"
			}, {
				num: 4,
				name: "Mary",
				id: 0004,
				gender: "女"
			} ]
		}, {
			id: 2,
			roomname: "Lorem Ipsum",
			dormno: "6",
			roomno: "606",
			roomcount: "4",
			repairrequest: 2,
			repairitem: [
				"日光灯", "下水道"
			],
			student: [ {
				num: 1,
				name: "Mark",
				id: 0001,
				gender: "男"
			}, {
				num: 2,
				name: "Jacob",
				id: 0002,
				gender: "男"
			}, {
				num: 3,
				name: "Larry",
				id: 0003,
				gender: "女"
			}, {
				num: 4,
				name: "Mary",
				id: 0004,
				gender: "女"
			} ]
		}, {
			id: 3,
			roomname: "Lorem Ipsum",
			dormno: "6",
			roomno: "606",
			roomcount: "4",
			repairrequest: 2,
			repairitem: [
				"日光灯", "下水道"
			],
			student: [ {
				num: 1,
				name: "Mark",
				id: 0001,
				gender: "男"
			}, {
				num: 2,
				name: "Jacob",
				id: 0002,
				gender: "男"
			}, {
				num: 3,
				name: "Larry",
				id: 0003,
				gender: "女"
			}, {
				num: 4,
				name: "Mary",
				id: 0004,
				gender: "女"
			} ]
		}, {
			id: 4,
			roomname: "Lorem Ipsum",
			dormno: "6",
			roomno: "606",
			roomcount: "4",
			repairrequest: 2,
			repairitem: [
				"日光灯", "下水道"
			],
			student: [ {
				num: 1,
				name: "Mark",
				id: 0001,
				gender: "男"
			}, {
				num: 2,
				name: "Jacob",
				id: 0002,
				gender: "男"
			}, {
				num: 3,
				name: "Larry",
				id: 0003,
				gender: "女"
			}, {
				num: 4,
				name: "Mary",
				id: 0004,
				gender: "女"
			} ]
		}, {
			id: 5,
			roomname: "Lorem Ipsum",
			dormno: "6",
			roomno: "606",
			roomcount: "4",
			repairrequest: 2,
			repairitem: [
				"日光灯", "下水道"
			],
			student: [ {
				num: 1,
				name: "Mark",
				id: 0001,
				gender: "男"
			}, {
				num: 2,
				name: "Jacob",
				id: 0002,
				gender: "男"
			}, {
				num: 3,
				name: "Larry",
				id: 0003,
				gender: "女"
			}, {
				num: 4,
				name: "Mary",
				id: 0004,
				gender: "女"
			} ]
		}, {
			id: 6,
			roomname: "Lorem Ipsum",
			dormno: "6",
			roomno: "606",
			roomcount: "4",
			repairrequest: 2,
			repairitem: [
				"日光灯", "下水道"
			],
			student: [ {
				num: 1,
				name: "Mark",
				id: 0001,
				gender: "男"
			}, {
				num: 2,
				name: "Jacob",
				id: 0002,
				gender: "男"
			}, {
				num: 3,
				name: "Larry",
				id: 0003,
				gender: "女"
			}, {
				num: 4,
				name: "Mary",
				id: 0004,
				gender: "女"
			} ]
		}, {
			id: 7,
			roomname: "Lorem Ipsum",
			dormno: "6",
			roomno: "606",
			roomcount: "4",
			repairrequest: 2,
			repairitem: [
				"日光灯", "下水道"
			],
			student: [ {
				num: 1,
				name: "Mark",
				id: 0001,
				gender: "男"
			}, {
				num: 2,
				name: "Jacob",
				id: 0002,
				gender: "男"
			}, {
				num: 3,
				name: "Larry",
				id: 0003,
				gender: "女"
			}, {
				num: 4,
				name: "Mary",
				id: 0004,
				gender: "女"
			} ]
		}, {
			id: 8,
			roomname: "Lorem Ipsum",
			dormno: "6",
			roomno: "606",
			roomcount: "4",
			repairrequest: 2,
			repairitem: [
				"日光灯", "下水道"
			],
			student: [ {
				num: 1,
				name: "Mark",
				id: 0001,
				gender: "男"
			}, {
				num: 2,
				name: "Jacob",
				id: 0002,
				gender: "男"
			}, {
				num: 3,
				name: "Larry",
				id: 0003,
				gender: "女"
			}, {
				num: 4,
				name: "Mary",
				id: 0004,
				gender: "女"
			} ]
		}, {
			id: 9,
			roomname: "Lorem Ipsum",
			dormno: "6",
			roomno: "606",
			roomcount: "4",
			repairrequest: 2,
			repairitem: [
				"日光灯", "下水道"
			],
			student: [ {
				num: 1,
				name: "Mark",
				id: 0001,
				gender: "男"
			}, {
				num: 2,
				name: "Jacob",
				id: 0002,
				gender: "男"
			}, {
				num: 3,
				name: "Larry",
				id: 0003,
				gender: "女"
			}, {
				num: 4,
				name: "Mary",
				id: 0004,
				gender: "女"
			} ]
		}, {
			id: 10,
			roomname: "Lorem Ipsum",
			dormno: "6",
			roomno: "606",
			roomcount: "4",
			repairrequest: 2,
			repairitem: [
				"日光灯", "下水道"
			],
			student: [ {
				num: 1,
				name: "Mark",
				id: 0001,
				gender: "男"
			}, {
				num: 2,
				name: "Jacob",
				id: 0002,
				gender: "男"
			}, {
				num: 3,
				name: "Larry",
				id: 0003,
				gender: "女"
			}, {
				num: 4,
				name: "Mary",
				id: 0004,
				gender: "女"
			} ]
		}, {
			id: 11,
			roomname: "Lorem Ipsum",
			dormno: "6",
			roomno: "606",
			roomcount: "4",
			repairrequest: 2,
			repairitem: [
				"日光灯", "下水道"
			],
			student: [ {
				num: 1,
				name: "Mark",
				id: 0001,
				gender: "男"
			}, {
				num: 2,
				name: "Jacob",
				id: 0002,
				gender: "男"
			}, {
				num: 3,
				name: "Larry",
				id: 0003,
				gender: "女"
			}, {
				num: 4,
				name: "Mary",
				id: 0004,
				gender: "女"
			} ]
		}, {
			id: 12,
			roomname: "Lorem Ipsum",
			dormno: "6",
			roomno: "606",
			roomcount: "4",
			repairrequest: 2,
			repairitem: [
				"日光灯", "下水道"
			],
			student: [ {
				num: 1,
				name: "Mark",
				id: 0001,
				gender: "男"
			}, {
				num: 2,
				name: "Jacob",
				id: 0002,
				gender: "男"
			}, {
				num: 3,
				name: "Larry",
				id: 0003,
				gender: "女"
			}, {
				num: 4,
				name: "Mary",
				id: 0004,
				gender: "女"
			} ]
		}, ]
	});
});

router.get('/repair', function (req, res, next) {
	res.render('managing', {
		title: "宿舍管理系统-维修申请",
		repair: 1,
		repairdetail: [{
			id: 1,
			name: "李四",
			room: "606",
			item: "日光灯",
			reason: "灯管烧坏了"
		}]
	});
});
router.get('/visit', function (req, res, next) {
	res.render('managing', {
		title: "宿舍管理系统-访客申请",
		visitor: 1,
		visitordetail: [{
			id: 1,
			name: "张三",
			arrive: "2018/01/01 12:00",
			leave: "2018/01/01 13:00",
			contact: "13012341234",
			reason: "看望学生"
		}]
	});
});


module.exports = router;