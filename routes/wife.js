var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('wife', { title: 'ใบลาไปช่วยเหลือภริยาที่คลอดบุตร' });
});

var ObjectID = require('mongodb').ObjectID;

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

var wife = mongoose.model('wife', wifeSchema);

router.post('/', function(req, res) {
    var addwife = new wife({
        write: req.body.write,
        date1: req.body.date1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        prologue: req.body.prologue,
        rank: req.body.rank,
        degree: req.body.degree,
        name1: req.body.name1,
        date2: req.body.date2,
        date3: req.body.date3,
        date4: req.body.date4,
        day1: req.body.day1,
        address: req.body.address,
        phone: req.body.phone,
        _id: new ObjectID()
    });
    mongoose.connect('mongodb://localhost:27017/myuser');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connection Successful!");
        //add data to db
        var add = new wife(addwife, { versionKey: false })
        add.save(function(err, newOne) {
            if (err) return console.error(err);
        });
    });
});

module.exports = router;