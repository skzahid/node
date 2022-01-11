var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

con.connect(function(err) {
    if(err) throw err;
    console.log('connected');
    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values =[
        ['Johan', 'Highway 71'],
        ['Johan1', 'Highway 72'],
        ['Johan2', 'Highway 73'],   
        ['Johan3', 'Highway 74'],
        ['Johan4', 'Highway 75'],
        ['Johan5', 'Highway 76'],
        ['Johan6', 'Highway 77'],
        ['Johan7', 'Highway 78'],
        ['Johan8', 'Highway 79']
    ];
    con.query(sql, [values], function (err, result) {
        if(err) throw err;
        console.log("Number Of Record Inserted: " + result.affectedRows); 
    });
});