const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentsSchema = new mongoose.Schema({
  restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
  user: {type: String, require:true},
  title: {type:String},
  comment:{type: String, require:true},
  date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Comment', CommentsSchema);
