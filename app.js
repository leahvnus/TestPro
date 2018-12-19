var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var profileRouter = require('./routes/profile');
var aboutRouter = require('./routes/about')
    //add
var usersRouter = require('./routes/users');
var absenceRouter = require('./routes/absence');
var holidayRouter = require('./routes/holiday');
var wifeRouter = require('./routes/wife');
var leaveRouter = require('./routes/leave');
var loveRouter = require('./routes/love');
var learnRouter = require('./routes/learn');
var hudRouter = require('./routes/hud');
//show
var showdbRouter = require('./routes/showdb');
var showab1Router = require('./routes/showab1');
var showwifeRouter = require('./routes/showwife');
var showloveRouter = require('./routes/showlove');
var showlearnRouter = require('./routes/showlearn');
var showhudRouter = require('./routes/showhud');
var showholidayRouter = require('./routes/showholiday');
var showdataRouter = require('./routes/showdata');

    //update
    //var putRouter = require('./routes/put');

var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myuser');
var Schema = mongoose.Schema;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/about', aboutRouter);
app.use('/users', usersRouter);
app.use('/', loginRouter);
app.use('/profile', profileRouter);
app.use('/absence', absenceRouter);
app.use('/holiday', holidayRouter);
app.use('/wife', wifeRouter);
app.use('/leave', leaveRouter);
app.use('/love', loveRouter);
app.use('/learn', learnRouter);
app.use('/hud', hudRouter);

//show
app.use('/showdb', showdbRouter);
app.use('/showab1', showab1Router);
app.use('/showwife', showwifeRouter);
app.use('/showlove', showloveRouter);
app.use('/showlearn', showlearnRouter);
app.use('/showhud', showhudRouter);
app.use('/showholiday', showholidayRouter);
app.use('/showdata', showdataRouter);
//app.use('/put', putRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;