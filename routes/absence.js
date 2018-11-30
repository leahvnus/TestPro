var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* GET home page. */
/*router.get('/', function(req, res, next) {
    res.render('absence', { title: 'ใบลา' });
});
*/
var ab1Schema = new Schema({
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
                res.render('absence', { title: 'ใบลา', data: showab })
            }
        })
        // res.render('showdb', { title: 'ShowDB' });
});


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
module.exports = router;