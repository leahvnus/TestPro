var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('love', { title: 'ใบลาไปช่วยเหลือภริยาที่คลอดบุตร' });
});

module.exports = router;