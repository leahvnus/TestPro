var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var membermodel = require('../models/myuser');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login' });
});

router.post('/', urlencodedParser, function(req, res, next) {
    //res.send("vjhvhvhjvjv");
    //res.render('respond', { username: req.body.username, password: req.body.password });
    var user = req.body.txtUsername;
    var pass = req.body.txtPassword;
    membermodel.create({ username: user, password: pass }),
        function(err, doc) {
            if (err) return next(err);
            res.send(doc);
        }
});
module.exports = router;