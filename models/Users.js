const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name:{
        type: String,
        required: true
    },
    login:{
        type: String,
        unique: true,
        required: true
    },
    token:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required: true
    }
},
    {
        timestamps: true
    })

schema.set('toJSON', {
    virtuals:true
})
module.exports = mongoose.model('Users', schema)