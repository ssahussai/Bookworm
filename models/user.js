const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

var bookSchema = new Schema({
    title: String,
    author: String
}, {
    timestamps: true
})


const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: String,
    books: [bookSchema]
}, {
    timestamps: true
});

userSchema.pre('save', function(next) {
    const user = this; 
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb);
};


module.exports = mongoose.model('User', userSchema)