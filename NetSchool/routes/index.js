var express = require('express');
var router = express.Router();
var session = require('express-session');
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var config = {
  userName: 'SURFACEBOOK/Zheng',
  password: '',
  server: '127.0.0.1',
};
var connection = new Connection(config);
connection.on('connect', function (err) {
  // If no error, then good to proceed.
  console.log("Connected");
});

var sess = {
  secret: 'keyboard cat',
  cookie: {}
}
router.use(session(sess))

function executeStatement(res) {
  request = new Request("SELECT [USERNAME],[PASSWORD] FROM [NetSchool].[dbo].[STUDENT];", function (err) {
    if (err) {
      console.log(err);
    }
  });
  request.on('done', function (rowCount, more, rows) {
    console.log(rows);
  });
  connection.execSql(request);
}

router.get('/', function (req, res, next) {
  executeStatement();
});

module.exports = router;
