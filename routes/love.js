var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('love', { title: 'ใบลาติดตามคู่สมรส' });
});

var ObjectID = require('mongodb').ObjectID;

var loveSchema = new Schema({
    write: { type: String },
    date1: { type: String },
    title: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    prologue: { type: String },
    rank: { type: String },
    degree: { type: String },
    salary: { type: String },
    salaryb: { type: String },
    name1: { type: String },
    prologue1: { type: String },
    rank1: { type: String },
    degree1: { type: String },
    country: { type: String },
    year: { type: String },
    mount: { type: String },
    day: { type: String },
    year1: { type: String },
    mount1: { type: String },
    day1: { type: String },
    date2: { type: String },
    date3: { type: String },
    place: { type: String },
    phone: { type: String },
    country1: { type: String },
    year2: { type: String },
    mount2: { type: String },
    day2: { type: String },
    date4: { type: String },
    date5: { type: String },
    year3: { type: String },
    mount3: { type: String },
    day3: { type: String },
}, { collection: 'love' });

var love = mongoose.model('love', loveSchema);

router.post('/', function(req, res) {
    var addlove = new love({
        write: req.body.write,
        date1: req.body.date1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        prologue: req.body.prologue,
        rank: req.body.rank,
        degree: req.body.degree,
        salary: req.body.salary,
        salaryb: req.body.salaryb,
        name1: req.body.name1,
        prologue1: req.body.prologue1,
        rank1: req.body.rank1,
        degree1: req.body.degree1,
        country: req.body.country,
        year: req.body.year,
        mount: req.body.mount,
        day: req.body.day,
        year1: req.body.year1,
        mount1: req.body.mount1,
        day1: req.body.day1,
        date2: req.body.date2,
        date3: req.body.date3,
        place: req.body.place,
        phone: req.body.phone,
        country1: req.body.country1,
        year2: req.body.year2,
        mount2: req.body.mount2,
        day2: req.body.day2,
        date4: req.body.date4,
        date5: req.body.date5,
        year3: req.body.year3,
        mount3: req.body.mount3,
        day3: req.body.day3,
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
        var add = new love(addlove, { versionKey: false })
        add.save(function(err, newOne) {
            if (err) return console.error(err);
        });
    });
});
module.exports = router;