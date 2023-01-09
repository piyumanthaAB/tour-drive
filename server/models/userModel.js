const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'A user must have an email'],
        lowercase: true,
        validate: [validator.isEmail, 'please provide a valid email']
    },
    photo: {
        type: String,
        default: 'http://blob_url_for_default_image'
    },
    role: {
        type: String,
        default: 'user',
        required: [true, 'A user must have a role'],
        enum: {
            values: ['admin', 'university', 'user'],
            message: "admin user ' title ' must be one of :< 'admin', 'university', 'user' > "
        }
    },
    active: {
        type: Boolean,
        default: true,
        select: false
    },
    
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;