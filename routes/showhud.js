var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hudSchema = new Schema({
    write: { type: String },
    date: { type: String },
    title: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    prologue: { type: String },
    rank: { type: String },
    degree: { type: String },
    firstday: { type: String },
    yes: { type: String },
    no: { type: String },
    date1: { type: String },
    date2: { type: String },
    date3: { type: String },
    day1: { type: String },
    sign: { type: String },
}, { collection: 'hud' });

var listhud = mongoose.model('listhud', hudSchema);

router.get('/', function(req, res, next) {
    listhud.find({}, function(err, showhud) {
        if (err) {
            return next(err);
        } else {
            //res.json(showdb);
            res.render('showhud', { title: 'ข้อมูลการลา', data: showhud })
        }
    })
});
module.exports = router;