const express = require('express');
const Tour = require('./../models/tourModel');

exports.getTour = (req, res) => {
  // const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);
  // if (!tour) {
  //   res.json({
  //     status: 'foul',
  //     tour: 'not found',
  //   });
  // }
  // res.status(200).json({
  //   status: 'sucsess',
  //   data: {
  //     tour,
  //   },
  // });
};

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'sucess',
      requestedAt: req.reqestTime,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'faied',
      message: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'sucsess',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'faied',
      message: err,
    });
  }
};
exports.deleteTour = (req, res) => {
  res.json({
    status: 'sucess',
    data: null,
  });
};
