var Event = require('../models/event.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);