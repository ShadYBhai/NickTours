const express = require('express');

const morgan = require('morgan');

const app = express();

const tourRouter = require('./routes/tourRoutes');

const userRouter = require('./routes/userRoutes');

// eslint-disable-next-line no-console
console.log(process.env.NODE_ENV);

// eslint-disable-next-line import/order
// const fs = require('fs');

//1.MIDDLEWARES
// app.get('/tourData', (req, res) => {
//   const allTours = fs.readFileSync(
//     `${__dirname}/dev-data/data/tours-simple.json`
//   );
//   res.send(allTours);
// });

app.use(express.json());

app.use(morgan('dev'));

app.use(express.static(`${__dirname}/public`));

app.use((res, req, next) => {
  console.log('hello from middleware bhai :)');
  next();
});

app.use((req, res, next) => {
  req.reqestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
