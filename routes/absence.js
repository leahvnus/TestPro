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
    yes: { type: String },
    no: { type: String },
    temp1: { type: String },
    place1: { type: String },
    phone: { type: String },
    date4: { type: String },
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
        prologue: req.body.prologue,
        me: req.body.me,
        rank: req.body.rank,
        degree: req.body.degree,
        affiliation: req.body.affiliation,
        birthd: req.body.birthd,
        birthm: req.body.birthm,
        birthb: req.body.birthb,
        birthd1: req.body.birthd1,
        birthm1: req.body.birthm1,
        birthb1: req.body.birthb1,
        temple: req.body.temple,
        addtem: req.body.addtem,
        phnumber: req.body.phnumber,
        birthd2: req.body.birthd2,
        birthm2: req.body.birthm2,
        birthb2: req.body.birthb2,
        temple1: req.body.temple,
        addtem1: req.body.addtem1,
        birthd3: req.body.birthd3,
        birthm3: req.body.birthm3,
        birthb3: req.body.birthb3,
        birthd4: req.body.birthd4,
        birthm4: req.body.birthm4,
        birthb4: req.body.birthb4,
        dtime: req.body.dtime,
        sign: req.body.sign,
        signn1: req.body.signn1,
        comment: req.body.signn1,
        sign2: req.body.signn1,
        signn2: req.body.signn2,
        rank1: req.body.rank1,
        date2: req.body.date2,
        comment1: req.body.comment1,
        sign3: req.body.sign3,
        signn3: req.body.signn3,
        rank2: req.body.rank2,
        date3: req.body.date3,
        _id: new ObjectID()
    });
    mongoose.connect('mongodb://localhost:27017/myuser');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connection Successful!");
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