var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res, next){
     res.render('chancefate');
     next();
});

router.get('/', function(req, res, next){
    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        database:'goodman'
    });
connection.connect();
    connection.query(' UPDATE userid SET newmember = 0 WHERE ID = "'+ req.session.ID +'"', function(err, rows, fields) {
        if (err) throw err;
    });
connection.end();

});

router.get('/:value', function(req,res,next) {
    console.log("req.params.value = " + req.params.value);
    var n = Math.floor(Math.random() * 10);
    n = n-1;
    n > 0;
    if (n>=5 && n<10){
        n=1;
    }
    else if(n>=0 && n<5 ){
        n=0;
    }

    console.log("n = " + n );
    var xor = req.params.value ^ n;
    console.log("XOR = "+ xor);

    if (xor == 1){
        console.log("good luck");
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            database:'goodman'
        });
        connection.connect();
            connection.query('UPDATE userid SET point = 1 WHERE ID = "'+ req.session.ID +'"', function(err, rows, fields) {
                    if (err) throw err;
<<<<<<< HEAD
                });
=======
            });
>>>>>>> user_login
        connection.end();        
        }
    else{
        console.log("bad luck");
    }
res.redirect("/userdata");
});


module.exports = router;