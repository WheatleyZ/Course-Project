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
  connection.query('select * from dormitory.students', function (error, results, fields) {
    
  });

  res.render('index', {
    title: "宿舍管理系统",
    managing: 0,
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

module.exports = router;
