var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post('/', function(req, res, next) {
  var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'goodman'

  });
  connection.connect();
  connection.query("SELECT * FROM userid WHERE ID = '" + req.body.ID + "'" , function(err, rows ,fields){
    if (err) throw err;
    var data = rows;
    res.render('userlogin', { data: data });
    console.log(data.length);
  });
  connection.end();
});
module.exports = router;