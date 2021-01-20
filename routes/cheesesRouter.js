const { Router } = require('express');
const cheeses = require('../data/cheeses.json');
const cheesesRouter = Router();
// endpoint to get all cheeses
cheesesRouter.get('/cheeses', (req, res) => {
  res.json(cheeses);
});
// endpoint to get a specific cheese
cheesesRouter.get('/cheeses/:cheeseName', (req, res) => {
  const { cheeseName } = req.params;
  const cheese = cheeses.find(cheese => cheese.name.toLowerCase().split(' ').join('-') === cheeseName);
  if (cheese) {
    res.json(cheese);
  } else {
    res.status(404).send('Cheese not found');
  }
});
module.exports = cheesesRouter;