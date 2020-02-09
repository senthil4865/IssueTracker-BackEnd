const mongoose = require('mongoose')
const Schema = mongoose.Schema
const time = require('../libs/timeLib')

const AuthSchema=new Schema({
userId:{type:String},
authToken:{type:String},
tokenSecret:{type:String},
tokenGenerationTime:{type:Date,default:Date.now()}
});

module.exports=mongoose.model('Auth',AuthSchema);
