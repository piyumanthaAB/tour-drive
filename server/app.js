import path from "path";
import { json } from "express";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { AppError } from "./utils/AppError.js";

//global error handler import
// const globalErrorHandler = require('./controllers/errorController');
import { globalErrorHandler } from "./controllers/errorController.js";

//routers import
// const userRouter = require('./routes/userRoutes');
import { tourRouter } from "./routes/tourRoutes.js";
import { vehicleRouter } from "./routes/vehicleRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import { authRouter } from "./routes/authRoutes.js";
import { bookingRouter } from "./routes/bookingRoutes.js";

const app = express();

// Log developmen t environment
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// read cookies into req object
app.use(cookieParser());

// read data coming from html forms.
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// body parser, reading JSON data from body into req.body
app.use(express.json({ limit: "10kb" }));

// routes
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/vehicles", vehicleRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/booking", bookingRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

// catch all the other undefined routes
app.all("*", (req, res, next) => {
  next(new AppError(`cannot find ${req.originalUrl} on this server !`, 404));
});

//global error handler use
app.use(globalErrorHandler);

export default app;
