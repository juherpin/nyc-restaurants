var express = require('express');
var router = express.Router();
var Restaurant = require('../models/restaurants');
var Comment = require('../models/comments');
var Q = require('q');
var getLastComment =() =>{
  var deffered = Q.defer()
  Comment
  .find({})
  .populate('restaurant')
  .sort({'date':-1})
  .exec( (err, comments)=> {
    if (err){
      deffered.reject(err)
    }else{
      deffered.resolve(comments)
    }
  });
  return deffered.promise
}

var getLastComment= (id)=>{
    var deffered = Q.defer()
  Comment
  .find({restaurant:id})
  .exec( (err, comments)=> {
    if (err){
      deffered.reject(err)
    }else{
      deffered.resolve(comments)
    }
  });
    return deffered.promise
}

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/comment', (req, res, next )=>{
  var comment = new Comment({
    restaurant: req.body.restaurant,
    user: req.body.user,
    title: req.body.title,
    comment:req.body.comment
  })
    comment.save(function (err) {
    if (err){
      res.render('error',{error: err})
    }
    res.redirect(`/`);
  })
});

var getBestRestaurants = () =>{
  var deffered = Q.defer()
  Restaurant.aggregate(
      [
          { $unwind : '$grades' },
          { "$sort": { "grades.score": -1 } },
          { "$limit": 10 }
      ],
      function(err,result) {
        if(err){
          deffered.reject(err)
        } else {
          deffered.resolve(result)
        }
      }
  )
  return deffered.promise
}

router.get('/', function(req, res, next) {
  var restaurants = [];
  getBestRestaurants()
  .then((rest)=>{
    restaurants = rest ;
    return getLastComment();
  })
  .then((comms)=>{
    res.render('restaurants/index', {restaurants:restaurants, comments:comms , title:'goodMeal'});
  })
  .catch((err)=>{
    res.render('error',{error:err})
  })

  //
});

router.get('/restaurant/:id', function(req, res, next) {
  Restaurant.findOne({'restaurant_id':req.params.id}, function(err,result) {
      console.log(result);
      res.render('restaurant/index', {restaurant:result});
      });
  //
});
module.exports = router;
