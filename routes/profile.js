var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //coockie session
    res.render('profile', { title: 'ข้อมูลส่วนตัว' })
});
module.exports = router;