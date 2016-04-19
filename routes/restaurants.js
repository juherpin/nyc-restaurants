var express = require('express');
var router = express.Router();
var Restaurant = require('../models/restaurants');

// Model available :
// eg. Restaurant.find({...}).exec().then(...)

var  getBestRestaurant= ()=>{

}
/* GET restaurants listing. */
router.get('/restaurants', function(req, res, next) {
  getBestRestaurant();
  var query = Restaurant.find({}).sort({ $sum:"$score" }).limit(10);
  query.exec(function(err, restaurants) {
      if(err){
        res.send(err)
      } else {
        res.send(restaurants)
      }
  })
  //res.render('restaurants/index', {});
});
router.get('/restaurant', function(req, res, next) {
  getBestRestaurant();
  var query = Restaurant.find({});
  query.exec(function(err, restaurants) {
      if(err){
        res.send(err)
      } else {
        res.send(restaurants)
      }
  })
  //res.render('restaurants/index', {});
});

module.exports = router;
