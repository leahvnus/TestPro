var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('learn', { title: 'ใบลาศึกษาต่อ' });
});

var ObjectID = require('mongodb').ObjectID;

var learnSchema = new Schema({
    write: { type: String },
    date1: { type: String },
    topic: { type: String },
    title: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    prologue: { type: String },
    rank: { type: String },
    degree: { type: String },
    birthday: { type: String },
    firstday: { type: String },
    salary: { type: String },
    salaryb: { type: String },
    lean: { type: String },
    subject: { type: String },
    level: { type: String },
    University: { type: String },
    country: { type: String },
    bursary: { type: String },
    train: { type: String },
    research: { type: String },
    Visit: { type: String },
    lean1: { type: String },
    course: { type: String },
    location: { type: String },
    country1: { type: String },
    bursary1: { type: String },
    date2: { type: String },
    date3: { type: String },
    year: { type: String },
    mount: { type: String },
    day: { type: String },
    place: { type: String },
    phone: { type: String },
    sign: { type: String },

}, { collection: 'learn' });

var learn = mongoose.model('learn', learnSchema);

router.post('/', function(req, res) {
    var addlearn = new learn({
        write: req.body.write,
        date1: req.body.date1,
        topic: req.body.topic,
        title: req.body.title,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        prologue: req.body.prologue,
        rank: req.body.rank,
        degree: req.body.degree,
        birthday: req.body.birthday,
        firstday: req.body.firstday,
        salary: req.body.salary,
        salaryb: req.body.salaryb,
        lean: req.body.lean,
        subject: req.body.subject,
        level: req.body.level,
        University: req.body.University,
        country: req.body.country,
        bursary: req.body.bursary,
        train: req.body.train,
        research: req.body.research,
        Visit: req.body.Visit,
        lean1: req.body.lean1,
        course: req.body.course,
        location: req.body.location,
        country1: req.body.country1,
        bursary1: req.body.bursary1,
        date2: req.body.date2,
        date3: req.body.date3,
        year: req.body.year,
        mount: req.body.mount,
        day: req.body.day,
        place: req.body.place,
        phone: req.body.phone,
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
        var add = new learn(addlearn, { versionKey: false })
        add.save(function(err, newOne) {
            if (err) return console.error(err);
        });
    });
});
module.exports = router;