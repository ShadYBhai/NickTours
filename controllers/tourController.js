const express = require('express');
const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    res.json({
      status: 'foul',
      tour: 'not found',
    });
  }

  res.status(200).json({
    status: 'sucsess',
    data: {
      tour,
    },
  });
};

exports.getAllTours = (req, res) => {
  console.log(req.reqestTime);
  res.status(200).json({
    status: 'sucess',
    requestedAt: req.reqestTime,
    data: {
      tours,
    },
  });
};

exports.createTour = (req, res) => {
  let newId = tours[tours.length - 1].id + 1;
  let newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'sucsess',
        data: {
          tour: newTour,
        },
      });
    }
  );
};
exports.deleteTour = (req, res) => {
  res.json({
    status: 'sucess',
    data: null,
  });
};
