var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res, next){
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'goodman'
});
connection.connect();
    connection.query('SELECT * FROM help WHERE ID = "'+ req.session.ID +'"AND yourhero !="no" ', function(err, rows, fields) {
    console.log(rows);
    res.render('accepthelp', { data:rows });
    });
});

router.get('/:accept', function(req, res, next){
if(req.parms.accept == 1){
res.redirect("/accepthelp/helping");
}


else{

}

});

router.get('/helping', function(req, res, next){
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'goodman'
});
connection.connect();
    connection.query('SELECT * FROM help WHERE ID = "'+ req.session.ID +'"AND yourhero !="no" ', function(err, rows, fields) {
    console.log(rows);
    res.render('accepthelp', { data:rows });
    });
});





module.exports = router;