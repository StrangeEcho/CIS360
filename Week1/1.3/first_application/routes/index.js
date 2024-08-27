var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var places = [
    { name: 'Home', rating: 9 },
    { name: 'Basketball Court', rating: 10 },
    { name: 'My bed', rating: 1000 },
    { name: 'The beach', rating: 8}
  ]
  var myname = "Ruben Thomas";

  res.render('index', {
    title: 'Favorite Place',
    places: places,
    myname: myname
  });
});

module.exports = router;
