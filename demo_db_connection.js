var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("connected");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql , function (err, result) {
        console.log("Table crteated");
    });
});