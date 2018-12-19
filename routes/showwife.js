var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wifeSchema = new Schema({
    write: { type: String },
    date1: { type: String },
    title: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    prologue: { type: String },
    rank: { type: String },
    degree: { type: String },
    name1: { type: String },
    date2: { type: String },
    date3: { type: String },
    date4: { type: String },
    day1: { type: String },
    address: { type: String },
    phone: { type: String },
}, { collection: 'wife' });

var listwife = mongoose.model('listwife', wifeSchema);

router.get('/', function(req, res, next) {
    listwife.find({}, function(err, showwife) {
        if (err) {
            return next(err);
        } else {
            //res.json(showdb);
            res.render('showwife', { title: 'แบบใบลาไปช่วยเหลือภริยาที่คลอดบุตร', data: showwife })
        }
    })
});
module.exports = router;