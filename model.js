const mongoose = require('mongoose');
const { Schema } = mongoose;

const message = new Schema({
    name: {
        type: String,
        required: true, // Name is required
        trim: true // Removes extra spaces
    },
    email: {
        type: String,
        required: true, // Email is required
        unique: false, // Multiple users can have the same email if needed
        trim: true, // Removes extra spaces
        match: [/.+@.+\..+/, 'Please enter a valid email address'] // Validates email format
    },
    message: {
        type: String,
        required: true, // Message is required
        trim: true // Removes extra spaces
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically sets the current date and time
    }
}, { timestamps: true });
   
    

module.exports = mongoose.model('message', message);
