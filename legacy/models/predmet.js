const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    predmet:{
        type: String,
        required: true
    },
    balls:{
        type: Number,
        required: true
    },
},
    {
        timestamps: true
    })

schema.set('toJSON', {
    virtuals:true
})
module.exports = mongoose.model('Predmet', schema)