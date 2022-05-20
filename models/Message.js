const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true, 'please enter your name'],
    },

    email: {
        type : String,
        required : [true, 'please enter your email'],
    },

    message: {
        type : String,
        required : [true, 'please enter message'],
    }
}, {timestamps : true})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message