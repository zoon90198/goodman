var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.all('/', function(req, res, next) {
  var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'goodman'
  });
  connection.connect();
  var id = 0;


  if (typeof(req.session.ID) == typeof(undefined)) {
    console.log('undefined');
    id = req.body.ID;
  } else {
    console.log('undefined2');
    id = req.session.ID
  }

  var sql = "SELECT * FROM userid WHERE ID = '" + id + "'";
    connection.query(sql , function(err, rows ,fields){
      console.log(rows[0].newmember);
      console.log(sql);
      console.log(typeof(id));
      if (err) throw err;
      
      req.session.ID = id;
      res.render('userdata', { data: rows });
    });
  connection.end();
});

router.get('/helpme', function(req, res, next) {
      res.render('helpme');
});

router.post('/helpme', function(req, res, next) {

  var connection = mysql.createConnection({
    host:'localhost' ,
    user:'root' ,
    database:'goodman' 
  });
  connection.connect();
  console.log (req.body);
    req.body.ID = req.session.ID;
    connection.query('INSERT INTO help SET ?',req.body, function(err, rows ,fields){
    console.log(rows.insertId);
     res.redirect('/thankyou');
    });
    connection.end();
  });

router.get('/helpyou', function(req, res, next){
  res.render('helpyou');
});


module.exports = router;

