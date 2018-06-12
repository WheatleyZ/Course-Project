var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var config = {
    userName: 'NetSchool',
    password: 'Test',
    server: '127.0.0.1',
};
var connection = new Connection(config);
connection.on('infoMessage', function (info) {
    // console.log(info);
})
connection.on('connect', function (err) {
    // If no error, then good to proceed.  
    if (err) {
        // console.log(err);
    }
    else {
        console.log("Connected");
        executeStatement();
    }
});

function executeStatement() {
    var list = [];
    request = new Request("SELECT [USERNAME],[PASSWORD] FROM [NetSchool].[dbo].[STUDENT] WHERE [USERNAME] = '张三' AND [PASSWORD] = '200';", function (err) {
        if (err) {
            // console.log(err);
        }
    });
    request.on('row', function (columns) {
        item = {
            name: columns[0].value,
            pws: columns[1].value
        }
        list.push(item);
    });
    request.on('requestCompleted', function (rowCount, more, rows) {
        console.log("done");
        connection.close();
        // console.log(list);
    });
    connection.execSql(request);
}