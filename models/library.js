const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bookSchema = new Schema ({
    title: String,
    isbn: String
}, {
    timestamps: true
})


var librarySchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    books: [bookSchema],
    genre: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Library', librarySchema);