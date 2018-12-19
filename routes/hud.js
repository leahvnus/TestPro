var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('hud', { title: 'ใบลาไปประกอบพิธีฮัจย์' });
});
var ObjectID = require('mongodb').ObjectID;

var hudSchema = new Schema({
    write: { type: String },
    date: { type: String },
    title: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    prologue: { type: String },
    rank: { type: String },
    degree: { type: String },
    firstday: { type: String },
    yes: { type: String },
    no: { type: String },
    date1: { type: String },
    date2: { type: String },
    day1: { type: String },
    sign: { type: String },
}, { collection: 'hud' });

var hud = mongoose.model('hud', hudSchema);

router.post('/', function(req, res) {
    var addhud = new hud({
        write: req.body.write,
        date1: req.body.date1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        prologue: req.body.prologue,
        rank: req.body.rank,
        degree: req.body.degree,
        firstday: req.body.firstday,
        yes: req.body.yes,
        no: req.body.no,
        date: req.body.date,
        date1: req.body.date1,
        day1: req.body.day1,
        sign: req.body.sign,
        _id: new ObjectID()
    });
    mongoose.connect('mongodb://localhost:27017/myuser');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connection Successful!")
        var data1 = '<a href="/profile">Back</a>' + '<br/>' + ' ' + 'Success ';
        res.send(data1);
        //add data to db
        var add = new hud(addhud, { versionKey: false })
        add.save(function(err, newOne) {
            if (err) return console.error(err);
        });
    });
});
module.exports = router;