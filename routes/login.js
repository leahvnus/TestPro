var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login' });
});

router.post('/', urlencodedParser, function(req, res, next) {
    //res.send("vjhvhvhjvjv");
    res.render('respond', { username: req.body.username, password: req.body.password });
});

module.exports = router;