const express = require('express');
const app = express();
 
const recordRoute = express.Router();
let Record = require('../model/record');
 
// Get all Records
recordRoute.route('/').get((req, res) => {
    Record.find().then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(`Could not get Records: ${error}`);
  })
})

recordRoute.route('/add-record').post((req, res) => {
  Record.create(req.body).then(() => {
    console.log('Record added successfully');
    res.status(200);
  })
  .catch((error) => {
    console.error(`Could not save record: ${error}`)
  })
})

recordRoute.route('/delete-record/:id').delete((req, res) => {
  console.log(`Preparing to delete: ${req.params.id}`);
  Record.findByIdAndDelete(req.params.id).then(() => {
    console.log("Record deleted successfully");
    res.status(200);
  })
  .catch((error) => {
    console.error(`Could not delete record: ${error}`);
  })
})

module.exports = recordRoute;