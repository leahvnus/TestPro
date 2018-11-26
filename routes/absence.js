var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/absence', function(req, res, next) {
    res.render('absence', { title: 'index' });
});

module.exports = router;