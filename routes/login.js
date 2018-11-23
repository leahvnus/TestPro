var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
//var membermodel = require('../models/myuser');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login' });
});

//router.post('/', urlencodedParser, function(req, res, next) {
//res.send("vjhvhvhjvjv");
//res.render('respond', { username: req.body.username, password: req.body.password });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
    username: { type: String, unique: true },
    password: { type: String }
}, { collection: 'myuser' });
var member = mongoose.model('member', memberSchema);

router.post('/', function(req, res) {
    var user = req.body.username;
    var pass = req.body.password;

    mongoose.connect('mongodb://localhost:27017/myuser');
    //var db = mongoose.connection;
    member.findOne({ username: user, password: pass }, 'username password', function(err, Member) {
        if (err) return handleError(err);
        if (Member == null) {
            console.log("wrong username or password"), res.redirect('/')
        } else {
            var data = '<a href="/">Home</a>' + '<br/>' + 'ยินดีต้อนรับ ' + user + ' ' + pass;
            res.send(data);
        }
    });
});
//});
module.exports = router;