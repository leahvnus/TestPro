var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('users', { title: 'Add' });
});

router.post('/users', urlencodedParser, function(req, res, next) {
    //res.send("haha");
    res.render('respond', { username: req.body.username, password: req.body.password });
});

module.exports = router;