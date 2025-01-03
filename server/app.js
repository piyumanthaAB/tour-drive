import path from 'path';
import { json } from 'express';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { AppError } from './utils/AppError.js';

const __dirname = path.resolve();

//global error handler import
// const globalErrorHandler = require('./controllers/errorController');
import { globalErrorHandler } from './controllers/errorController.js';

//routers import
// const userRouter = require('./routes/userRoutes');
import { customTourRouter } from './routes/customTourRoutes.js';
import { tourRouter } from './routes/tourRoutes.js';
import { vehicleRouter } from './routes/vehicleRoutes.js';
import { userRouter } from './routes/userRoutes.js';
import { authRouter } from './routes/authRoutes.js';
import { bookingRouter } from './routes/bookingRoutes.js';
import { reviewRouter } from './routes/reviewRoutes.js';
import { statRouter } from './routes/statRoutes.js';
import { emergencyRouter } from './routes/emergencyRoutes.js';
import { DistrictDataRouter } from './routes/districtDataRoutes.js';
import { blogRouter } from './routes/blogRoutes.js';
import { qaRouter } from './routes/qaRoutes.js';

const app = express();

// Logs
app.use(morgan('dev'));

// read cookies into req object
app.use(cookieParser());

// read data coming from html forms.
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// body parser, reading JSON data from body into req.body
app.use(express.json({ limit: '10kb' }));

// routes
app.use('/api/v1/custom-tours', customTourRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/vehicles', vehicleRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/booking', bookingRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/stats', statRouter);
app.use('/api/v1/emergencies', emergencyRouter);
app.use('/api/v1/district-data', DistrictDataRouter);
app.use('/api/v1/blogs', blogRouter);
app.use('/api/v1/qa', qaRouter);

if (process.env.NODE_ENV === 'production') {
  // test
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// catch all the other undefined routes
app.all('*', (req, res, next) => {
  next(new AppError(`cannot find ${req.originalUrl} on this server !`, 404));
});

//global error handler use
app.use(globalErrorHandler);

export default app;
