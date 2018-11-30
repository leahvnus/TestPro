var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    ab1.find({}, function(err, showme) {
            if (err) {
                return next(err);
            } else {
                //res.json(showab);
                res.render('profile', { title: 'ข้อมูลส่วนตัว', data: showme })
            }
        })
        // res.render('showdb', { title: 'ShowDB' });
});
module.exports = router;