var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
    sign: {type: String},
}, { collection: 'holiday' });

var listholiday = mongoose.model('listholiday', holidaySchema);

router.get('/', function(req, res, next) {
    listholiday.find({}, function(err, showholiday) {
        if (err) {
            return next(err);
        } else {
            //res.json(showdb);
            res.render('showholiday', { title: 'ข้อมูลการลาพักผ่อน', data: showholiday })
        }
    })
});
module.exports = router;