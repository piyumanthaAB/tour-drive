const path = require('path');
const { json } = require('express');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


//global error handler import
const globalErrorHandler = require('./controllers/errorController');

//routers import
const userRouter = require('./routes/userRoutes');

const app = express();

 // Log developmen t environment
if (process.env.NODE_ENV === 'development') { 
    app.use(morgan('dev'));
}

// read cookies into req object
app.use(cookieParser());

// read data coming from html forms.
app.use(express.urlencoded({ extended: true, limit: '10kb' })); 

// body parser, reading JSON data from body into req.body
app.use(express.json({ limit: '10kb' }));

// routes
app.use('/api/v1/users', userRouter);



//global error handler use
app.use(globalErrorHandler);

module.exports = app;
