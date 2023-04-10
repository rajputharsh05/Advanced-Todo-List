const mongoose = require('mongoose')

const todo = new mongoose.Schema({
    id:Number,
    work:String,
})

const User = mongoose.model('User',todo)

module.exports  = User