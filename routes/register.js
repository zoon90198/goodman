var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res, next) {
  var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'goodman'
  });
  connection.connect();
    connection.query('SELECT * FROM userid', function (err, rows ,fields){
      if (err) throw err;
      res.render('register', { data: rows });
    });
  connection.end();
});

router.post('/', function(req, res, next) {
  var connection = mysql.createConnection({
    host:'localhost' ,
    user:'root' ,
    database:'goodman'
  });
  connection.connect();
  console.log (req.body);
    connection.query('INSERT INTO userid SET ?',req.body, function(err, rows, fields){
      res.redirect("/");
    }); 
  connection.end();
});


module.exports = router;