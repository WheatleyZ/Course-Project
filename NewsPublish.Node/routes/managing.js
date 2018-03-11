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

router.get('/', function (req, res, next) {
  connection.query('select * from newsplatform.news,newsplatform.editor where editor.ideditor=news.editor', function (error, results, fields) {
    var articles = [];
    if (!error) {
      for (var a of results) {
        articles.push({
          "id": a.idnews,
          "title": a.title,
          "editor": a.editorName,
          "time": String(a.publishTime).substr(0, 16)
        });
      }
      res.render('managing', {
        "content": articles
      });
    }
    else {
      res.render('managing', {
        "error": true,
        "e": error
      });
    }
  });
});

router.get('/edit', function (req, res, next) {
  if (isNaN(req.query.id)) {
    res.render('editor', {
      "error": "文章id非法",
      "errmsg": "不正确的id，请退出"
    });
  }
  else if (req.query.id == 0) {
    res.render('editor', {
      "title": "editor",
      "id": 0,
      "editor": true,
      "heading": "",
      "content": ""
    });
  }
  else {
    connection.query('select news.idnews,news.title,news.content from newsplatform.news where news.idnews = ' + req.query.id, function (error, results, fields) {
      if (results >= [] && results <= []) {
        res.render('editor', {
          "error": "文章id非法",
          "errmsg": "该id对应的文章不存在，请退出"
        });
      }
      else {
        res.render('editor', {
          "title": "editor",
          "editor": true,
          "id": results[0].idnews,
          "heading": results[0].title,
          "content": results[0].content
        });
      }
    });
  }
});

router.post('/post', function (req, res) {
  if (req.body.id == 0) {
    connection.query('select news.idnews from newsplatform.news', function (error, results, fields) {
      var id, editor, time, title, content;
      if (results.length == 0) {
        id = 0
      }
      else {
        for (var i = 1; i <= results[results.length - 1].idnews; i++) {
          if (i == results[results.length - 1].idnews) {
            id = i + 1;
            break;
          }
          else if (results[i - 1].idnews > i) {
            id = i;
            break;
          }
        }
      }
      editor = 1;
      var d = new Date();
      time = d.getFullYear().toString() + "-" + (d.getMonth() + 1).toString() + "-" + d.getDay().toString();
      title = req.body.title;
      content = "<p>" + req.body.content + "</p>";
      var sql = "INSERT INTO `newsplatform`.`news` (`idnews`, `editor`, `publishTime`, `title`, `content`) VALUES ('" + id + "', '" + editor + "', '" + time + "', '" + title + "', '" + content + "')"
      connection.query(sql, function (error, results, fields) {
        if (error) {
          res.status(200).send(error);
        }
        else {
          res.status(200).send(results);
        }
      });
    });
  }
  else {
    var id, editor, time, title, content;
    id = req.body.id;
    editor = 1;
    var d = new Date();
    time = d.getFullYear().toString() + "-" + (d.getMonth() + 1).toString() + "-" + d.getDay().toString();
    title = req.body.title;
    content = req.body.content;
    var sql = "UPDATE`newsplatform`.`news` SET`editor`='" + editor + "', `publishTime`='" + time + "', `title`='" + title + "', `content`='" + content + "' WHERE`idnews` = '" + id + "'";
    connection.query(sql, function (error, results, fields) {
      if (error) {
        res.status(200).send(error);
      }
      else {
        res.status(200).send(results);
      }
    });
  }
});

router.post('/delete', function (req, res) {
  connection.query("DELETE FROM `newsplatform`.`news` WHERE `idnews`='" + req.body.id + "';", function (error, results, fields) {
    if (results.affectedRows == 0) {
      res.status(200).send("找不到该文章");
    }
    else {
      res.status(200).send("成功");
    }
  });
});

module.exports = router;
