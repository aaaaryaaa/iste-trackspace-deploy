const mongoose = require('mongoose')

const Schema = mongoose.Schema

//creating schema 
const week1 = new Schema({
    regno: {
        type: Number,
        required: true
    },
    task1: {
        type: Boolean,
        required: false
    },
    task2: {
        type: Boolean,
        required: false //DESC not really required
    },
    task3: {
        type: Boolean,
        required: false
    },
    task4: {
        type: Boolean,
        required: false
    },
    task5: {
        type: Boolean,
        required: false
    }
}, {timestamps: true})

module.exports=mongoose.model('Week1', week1)