const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var librarySchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    books: String,
    genre: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Library', librarySchema);