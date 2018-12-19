var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

var listlove = mongoose.model('listlove', loveSchema);

router.get('/', function(req, res, next) {
    listlove.find({}, function(err, showlove) {
        if (err) {
            return next(err);
        } else {
            //res.json(showdb);
            res.render('showlove', { title: 'ข้อมูลการลา', data: showlove })
        }
    })
});
module.exports = router;