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
  connection.query('SELECT * FROM help', function (err, rows ,fields){
    if (err) throw err;
    var data = rows;
    res.render('helpme', { data: data });
  });
  connection.end();
});

router.post('/', function(req, res, next) {
  var connection = mysql.createConnection({
    host:'localhost' ,
    user:'root' ,
    database:'goodman'
  });
  console.log (req.body);
  connection.query('INSERT INTO help SET ?',req.body, function(err){});
  connection.end();
  res.redirect("/");
});


module.exports = router;