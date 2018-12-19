var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listabSchema = new Schema({
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

var listab = mongoose.model('listab', listabSchema);

router.get('/', function(req, res, next) {
    listab.find({}, function(err, showab1) {
        if (err) {
            return next(err);
        } else {
            //res.json(showdb);
            res.render('showab1', { title: 'ข้อมูลการขอลาอุปสมบท', data: showab1 })
        }
    })
});
module.exports = router;