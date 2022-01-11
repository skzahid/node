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
    var sql = "INSERT INTO customers (name, address) VALUES ('company Inc', 'HIGHway 37')";
    con.query(sql, function (err, result) {
        if(err) throw err;
        console.log("1 record inserted");
    });
});