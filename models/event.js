const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Event', eventSchema);