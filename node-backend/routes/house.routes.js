const express = require('express');
const app = express();
const houseRoute = express.Router();
let House = require('../model/House');
// Add House
houseRoute.route('/add-house').post((req, res, next) => {
    House.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all House
houseRoute.route('/').get((req, res) => {
    House.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get House
houseRoute.route('/read-house/:id').get((req, res) => {
    House.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Update House
houseRoute.route('/update-house/:id').put((req, res, next) => {
    House.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('House updated successfully!')
    }
  })
})
// Delete House
houseRoute.route('/delete-house/:id').delete((req, res, next) => {
    House.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = houseRoute;