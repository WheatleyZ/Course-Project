var express = require('express');
var router = express.Router();
var session = require('express-session');
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var config = {
  userName: 'NetSchool',
  password: 'Test',
  server: '127.0.0.1',
};
var connection = new Connection(config);

connection.on('connect', function (err) {
  // 如果没有错误，则连接数据库成功
  console.log("Connected");
});

router.use(session({
  secret: '2015211911',
  cookie: {}
}));

router.post('/login', function (req, res, next) {
  var list = [];
  //声明查询
  request = new Request("SELECT [USERID],[USERNAME],[PASSWORD] FROM [NetSchool].[dbo].[STUDENT]", function (err) {
    if (err) {
      console.log(err);
    }
  });
  //处理每条结果
  request.on('row', function (columns) {
    item = {
      id: columns[0].value,
      name: columns[1].value,
      pwd: columns[2].value
    }
    list.push(item);
  });
  //查询完成后处理
  request.on('requestCompleted', function (rowCount, more, rows) {
    list.forEach(item => {
      if (item.name == req.body.username && item.pwd == req.body.password) {
        console.log("legit");
        req.session.userID = item.id;
        req.session.username = item.name;
        req.session.save(function (err) {
          if (err) console.log(err);
          res.sendStatus(200);
        });
        return;
      }
    });
  });

  connection.execSql(request);
})

router.get('/', function (req, res, next) {
  if (!req.session.userID) {
    console.log("new User");
    res.render('index', {
      login: true
    });
  }
  else {
    console.log(`${req.session.username} is back`);
    res.render('index', {
      logged: true,
      id: req.session.userID,
      name: req.session.username
    })
  }
})

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.redirect('/');
})

router.get('/courses', function (req, res, next) {
  var list = [];
  //声明查询
  request = new Request(`SELECT [dbo].[STUDENT_CLASS].[USERID],[dbo].[STUDENT].[USERNAME],[dbo].[CLASS].[CLASSNAME] FROM [dbo].[STUDENT],[dbo].[STUDENT_CLASS],[dbo].[CLASS] WHERE [CLASS].CLASSID = [STUDENT_CLASS].CLASSID AND [STUDENT].USERID = [STUDENT_CLASS].USERID AND [STUDENT_CLASS].[USERID] = ${req.session.userID}`, function (err) {
    console.log(err);
  })
  //处理每一行结果
  request.on('row', function (columns) {
    list.push({ course: columns[2].value });
  });
  //查询完成后处理
  request.on('requestCompleted', function (rowCount, more, rows) {
    res.render('courses', {
      course: list
    });
  })
  connection.execSql(request);
})

module.exports = router;
