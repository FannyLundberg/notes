var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mySql = require("mysql2");
const cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const documentsRouter = require('./routes/documents');

var app = express();
app.use(cors());


// Uppkoppling till databasen
app.locals.con = mySql.createConnection({
    multipleStatements: true,
    host: "localhost",
    port: "3306",
    user: "notes",
    password: "notes",
    database: "document_system"
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/documents', documentsRouter);

module.exports = app;
