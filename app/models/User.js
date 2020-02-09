const mongoose=require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const Schema=mongoose.Schema;


let userSchema=new Schema({
userId:{type:String,default:"",index:true,unique:true},
firstName: {type: String,default: ""},
lastName: { type: String, default: ""},
countryName: {type: String,default: ""},
mobileNumber: {type: String,default: ""},
password: {type: String,default: ""},
email: { type: String,default: ""},
assignedIssues:[{type:Schema.Types.ObjectId,ref:'Issue'}],
watchingIssues:[{type:Schema.Types.ObjectId,ref:'Issue'}],
reportedIssues:[{type:Schema.Types.ObjectId,ref:'Issue'}]
},{
    usePushEach: true
  });

  userSchema.plugin(deepPopulate);


module.exports=mongoose.model('User',userSchema);