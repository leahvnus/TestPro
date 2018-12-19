var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('absence', { title: 'ใบลาอุปสมบท' });
});
var ObjectID = require('mongodb').ObjectID;
var ab1Schema = new Schema({
    write: { type: String },
    date1: { type: String },
    title: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    prologue: { type: String },
    rank: { type: String },
    degree: { type: String },
    date2: { type: String },
    date3: { type: String },
    no: { type: String },
    yes: { type: String },
    tem1: { type: String },
    place1: { type: String },
    phone: { type: String },
    date4: { type: String },
    tem2: { type: String},
    place2: { type: String },
    date5: { type: String },
    date6: { type: String },
    day1: { type: String },
    sign: { type: String },
    signn1: { type: String },
    comment: { type: String },
    sign2: { type: String },
    signn2: { type: String },
    rank1: { type: String },
    date7: { type: String },
    comment1: { type: String },
    sign3: { type: String },
    signn3: { type: String },
    rank2: { type: String },
    date8: { type: String }
}, { collection: 'ab1' });

var ab1 = mongoose.model('ab1', ab1Schema);

router.post('/', function(req, res) {
    var addab1 = new ab1({
        write: req.body.write,
        date1: req.body.date1,
        title: req.body.title,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        prologue: req.body.prologue,
        me: req.body.me,
        rank: req.body.rank,
        degree: req.body.degree,
        date2: req.body.date2,
        date3: req.body.date3,
        no: req.body.no,
        yes: req.body.yes,
        tem1: req.body.temp1,
        place1: req.body.place1,
        phone: req.body.phone,
        date4: req.body.date4,
        tem2: req.body.temp2,
        place2: req.body.place2,
        date5: req.body.date5,
        date6: req.body.date6,
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
        var add = new ab1(addab1, { versionKey: false })
        add.save(function(err, newOne) {
            if (err) return console.error(err);
        });
    });
});
module.exports = router;
/*var ab1Schema = new Schema({
    address: { type: String },
    date: { type: String },
    title: { type: String },
    firstname: { type: String },
    lastname: { type: String },
}, { collection: 'myuser' });
var ab1 = mongoose.model('ab1', ab1Schema);

router.get('/', function(req, res, next) {
    ab1.find({}, function(err, showab) {
            if (err) {
                return next(err);
            } else {
                //res.json(showab);
                res.render('absence', { title: '????', data: showab })
            }
        })
        // res.render('showdb', { title: 'ShowDB' });
});*/


/*router.post('/', function(req, res) {
    var address = req.body.address;
    var date = req.body.date;
    var title = req.body.title;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    mongoose.connect('mongodb://localhost:27017/ab1');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connection Successful!");
        //add data to db
        var add = new ab1({ address: address, date: date, title: title, firstname: firstname, lastname: lastname }, { versionKey: false })
        add.save(function(err, newOne) {
            if (err) return console.error(err);
        });
    });
});*/