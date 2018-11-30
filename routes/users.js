var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('users', { title: 'Add' });
});

//router.post('/', urlencodedParser, function(req, res, next) {
//  res.send("haha");
//res.render('respond', { username: req.body.username, password: req.body.password });
//});

var adduserSchema = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    username: { type: String, unique: true },
    password: { type: String },
    email: { type: String },
}, { collection: 'myuser' });
var adduser = mongoose.model('adduser', adduserSchema);

router.post('/', function(req, res) {
    var firstn = req.body.firstname;
    var lastn = req.body.lastname;
    var user = req.body.username;
    var pass = req.body.password;
    var email = req.body.email;
    mongoose.connect('mongodb://localhost:27017/myuser');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connection Successful!");
        //add data to db
        var add = new adduser({ firtname: firstn, lastname: lastn, username: user, password: pass, email: email }, { versionKey: false })
        add.save(function(err, newOne) {
            if (err) return console.error(err);
        });
    });
});
module.exports = router;