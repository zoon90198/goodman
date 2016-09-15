var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req,res,next){
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'goodman'
});
connection.connect();
    connection.query('SELECT * FROM help ', function(err, rows, fields) {
        if (err) throw err;;
        console.log(rows.length);
        res.render('classify', { data: rows });
    });
connection.end();
});

router.get('/:helpstatus', function(req,res,next) {
    res.redirect('/userdata');
    console.log(req.params.helpstatus);
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            database:'goodman'
        });
        connection.connect();
            connection.query('UPDATE help SET yourhero = "'+ req.session.ID +'" WHERE caseid = "'+ req.params.helpstatus +'"', function(err, rows, fields) {
	            if (err) throw err;
            });
        connection.end();

});

module.exports = router;