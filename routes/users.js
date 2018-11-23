var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('users', { title: 'Add User' });
});

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    username: { type: String, unique: true },
    password: { type: String }
}, { collection: 'myuser' });
var usersmodel = mongoose.model('usersmodel', usersSchema);


router.post('/users', function(req, res) {
    var user = req.body.username;
    var pass = req.body.password;

    mongoose.connect('mongodb://localhost:27017/myuser');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connection Successful!");
        //add data to db
        var add = new user({ username: user, password: pass }, { versionKey: false })
        add.save(function(err, newOne) {
            if (err) return console.error(err);
        });
        res.redirect('/');
    });
});

module.exports = router;