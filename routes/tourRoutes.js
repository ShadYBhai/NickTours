const express = require('express');
const fs = require('fs');
const tourController = require('./../controllers/tourController');

const tourRouter = express.Router();

tourRouter.param('id', (req, res, next, val) => {
  console.log(`tour id id : ${val}`);
  next();
});

tourRouter
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);

tourRouter
  .route('/:id')
  .get(tourController.getTour)
  .delete(tourController.deleteTour);

module.exports = tourRouter;
