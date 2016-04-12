var express = require('express');
var router = express.Router();
var Restaurant = require('../models/restaurants');
var Comment = require('../models/comments');

var getLastComment(){
  Comment
  .find({})
  .populate('restaurant')
  .exec(function (err, comments) {
    if (err){
      res.json(err)
    }else{
      res.json(comments)
    }
  });
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
    res.redirect(`/restaurant/${req.body.restaurant}`);
  })
});
router.get('/restaurants', function(req, res, next) {
  Restaurant.aggregate(
      [
          { $unwind : '$grades' },
          { "$sort": { "grades.score": -1 } },
          { "$limit": 10 }
      ],
      function(err,result) {
        if(err){
          res.send(err)
        } else {
          //res.send(result)
          res.render('restaurants/index', {restaurants:result , title:'goodMeal'});
        }
      }
  );
  //
});

router.get('/restaurant/:id', function(req, res, next) {
  Restaurant.findOne(
    {restaurant_id: req.params.id}, function(err,result) {

      });
  //
});
module.exports = router;
