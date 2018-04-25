var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});
//Select all
/* con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
}); */

//Select coloum
/*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    });
  }); */

  //Field Object
/*   con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
      if (err) throw err;
      console.log(fields);
    });
  }); */

  //Wildcard
/*   con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  }); */

  //Excape query value 1
/* var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
}); */

//Excape query value 2
/* var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ?';
con.query(sql, [adr], function (err, result) {
  if (err) throw err;
  console.log(result);
}); */

//Excape query value 2
var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});