const mongoose = require('mongoose');

const RestaurantsSchema = new mongoose.Schema({
    address:{
        building: { type : String },
        coord:[
            { type : Number },
            { type : Number }
        ],
        street: { type : String },
        zipcode: { type : Number }
    },
    borough: { type : String},
    cuisine: { type : String},
    grades:[
        {
            date:{ type : Date },
            grade: { type : String },
            score: { type : Number }
        }
    ],
    name: { type : String },
    restaurant_id: { type : Number}
});

module.exports = mongoose.model('Restaurant', RestaurantsSchema);
