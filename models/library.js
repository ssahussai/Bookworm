const mongoose = require('mongoose');
const Schema = mongoose.Schema;




var librarySchema = new Schema({
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

mongoose.model('Library', librarySchema);
