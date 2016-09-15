var express = require('express');
var router = express.Router();
var mysql = require('mysql');


router.get('/', function(req, res, next) {
  res.render('index', { title:'Good man'});
});

router.post('/', function(req, res, next) {
  var connection = mysql.createConnection({
    host:'localhost' ,
    user:'root' ,
    database:'goodman'
  });
  connection.connect();
  console.log(req.body);
  var sqlid ="SELECT * FROM userid WHERE ID = '" + req.body.ID + "'" ;
    connection.query(sqlid , function(err, rows ,fields){   
        req.session.ID = req.body.ID;
        req.session.password = req.body.password;
        console.log(req.session.ID);
        console.log(req.session.password);
        if(rows[0].newmember == 1 && rows[0].password == req.body.password){
          res.redirect("/chancefate");
        }
        else if(rows[0].password == req.body.password){
          res.redirect("/userdata");
        }
        else if(rows[0].password != req.body.password || rows[0].ID != req.body.ID ){
          res.redirect("/");
        }
    });
  connection.end(); 
});

module.exports = router;




