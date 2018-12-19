var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

var listlearn = mongoose.model('listlearn', learnSchema);

router.get('/', function(req, res, next) {
    listlearn.find({}, function(err, showlearn) {
        if (err) {
            return next(err);
        } else {
            //res.json(showdb);
            res.render('showlearn', { title: 'ข้อมูลการลา', data: showlearn })
        }
    })
});
module.exports = router;