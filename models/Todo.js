const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Todo = new Schema({

    UserId: {
        type: String,
        required: ['true', 'UserId field is required']
    },

    Id: {
        type: String,
        required: ['true', 'Id field is required']
    },

    Title: {
        type: String,
        required: ['true', 'Title field is required']
    },

    Description: String,

    IsCompleted: {
        type: Boolean,
        default: false
    },

    CreatedAt: {
        type: Date,
        default: Date.now
    },

    UpdatedAt: Date,
    CompletedAt: Date

})

module.exports = mongoose.model('todos', Todo)