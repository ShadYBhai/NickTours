const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

//Route Handeler -
app.get('/api/v1/tours/:id', (req, res) => {
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
});

app.get('/api/v1/tours', (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: 'sucess',
    data: {
      tours,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  let newId = tours[tours.length - 1].id + 1;
  let newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
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
});

app.patch('/api/v1/tours/:id', (req, res) => {});

const port = 5000;
app.listen(port, () => console.log('Sever Running...'));
