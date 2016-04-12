var express = require('express');
var router = express.Router();
var Restaurant = require('../models/restaurants');
// var comment = require('')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/restaurants', function(req, res, next) {
  Restaurant.aggregate(
      [
        { $unwind : "$grades.score " },
          // { "$group": {
          //     "_id": {
          //       name: '$name',
          //       cuisine: '$cuisine',
          //       id: '$restaurant_id'
          //     },
          //     "score": { "$avg":  "$grades.score " }
          //   }
          // },
          // { "$sort": { "score": -1 } },
          // { "$limit": 10 }
      ],
      function(err,result) {
        if(err){
          res.send(err)
        } else {
          res.send(result)
          // res.render('restaurants/index', {restaurants:result , title:'goodMeal'});
        }
      }
  );
  //
});
router.get('/restaurant/:id', function(req, res, next) {
  Restaurant.aggregate(
      [
          { "$group": {
              "_id": {
                name: '$name',
                cuisine: '$cuisine',
                id: '$restaurant_id'
              },
              "score": { "$avg":  '$grades.score'  }
            }
          },
          { "$sort": { "score": -1 } },
          { "$limit": 10 }
      ],
      function(err,result) {
        if(err){
          res.send(err)
        } else {
          res.send(result)
          // res.render('restaurants/index', {restaurants:result , title:'goodMeal'});
        }
      }
  );
  //
});
module.exports = router;
