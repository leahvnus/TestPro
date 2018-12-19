var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //check login
    res.render('showdata', { title: 'ข้อมูลการลา' })
});
module.exports = router;