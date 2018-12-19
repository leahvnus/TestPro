var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('holiday', { title: 'ใบลาพักร้อน' });
});
var ObjectID = require('mongodb').ObjectID;

var holidaySchema = new Schema({
    write: { type: String },
    date1: { type: String },
    title: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    prologue: { type: String },
    rank: { type: String },
    degree: { type: String },
    number1: { type: String },
    number2: { type: String },
    number3: { type: String },
    date5: { type: String },
    date6: { type: String },
    day1: { type: String },
    place1: { type: String },
    phone: { type: String },
}, { collection: 'holiday' });

var holiday = mongoose.model('holiday', holidaySchema);

router.post('/', function(req, res) {
    var addholiday = new holiday({
        write: req.body.write,
        date1: req.body.date1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        prologue: req.body.prologue,
        rank: req.body.rank,
        degree: req.body.degree,
        number1: req.body.number1,
        number2: req.body.number2,
        number3: req.body.number3,
        date5: req.body.date5,
        date6: req.body.date6,
        day1: req.body.day1,
        place1: req.body.place1,
        phone: req.body.phone,
        _id: new ObjectID()
    });
    mongoose.connect('mongodb://localhost:27017/myuser');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connection Successful!");
        //add data to db
        var add = new holiday(addholiday, { versionKey: false })
        add.save(function(err, newOne) {
            if (err) return console.error(err);
        });
    });
});

module.exports = router;