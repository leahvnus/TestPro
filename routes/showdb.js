var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var listSchema = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    username: { type: String, unique: true },
    password: { type: String },
    email: { type: String },
}, { collection: 'myuser' });
var list = mongoose.model('list', listSchema);

router.get('/', function(req, res, next) {
    list.find({}, function(err, showdb) {
        if (err) {
            return next(err);
        } else {
            //res.json(showdb);
            res.render('showdb', { title: 'ข้อมูลการลา', data: showdb })
        }
    })
});
module.exports = router;