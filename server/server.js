const mongoose = require('mongoose');
const dotenv = require('dotenv');

//catch synchronous errors
process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION ERROR 💥💥 \tShutting down .....');
    console.log(err);
    process.exit(1);
});

// set the path of the configuration file which stores the environment variables
dotenv.config({ path: './config.env' });

const app = require('./app');

console.log(`\n ============ ♦️♦️ Running Environment : ${process.env.NODE_ENV} ♦️♦️  ============\n`);

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

// database connection
mongoose.connect(DB, {
    useNewUrlParser: true, useUnifiedTopology: true,autoIndex:true
}).then(() => {
    console.log(" DB connection Success 👍 !");
});

// create web server and listen to the incoming requests
const server = app.listen(process.env.PORT, () => {
    console.log(`👉 Server is listening in port ${process.env.PORT}`);
});

// catch asynchronous errors
process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION ERROR 💥💥 \tShutting down .....');
    console.log(err);
    server.close(() => {
        process.exit(1);
    });
});
