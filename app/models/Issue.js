const mongoose=require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const Schema=mongoose.Schema;

const IssueSchema=new Schema({
issueId:{type:String,unique:true,required:true},
title:{type:String,default:''},
status:{type:String,default:''},
reportedBy:{type:[{userId:{type:String,default:''},userName:{type:String,default:''}}]},
reportedOn:{type:Date,default:Date.now()},
modifiedOn:{type:Date,default:Date.now()},
description:{type:String,default:''},
screenshot:{type:String,default:''},
assignedTo:{type:[{userId:{type:String,default:''},userName:{type:String,default:''}}]},
watchedBy:{type:[{userId:{type:String,default:''},userName:{type:String,default:''}}]},
comments:{type:[{userId:{type:String,default:''},userName:{type:String,default:''},
commentTitle:{type:String,default:''},commentDescription:{type:String,default:''},}]}
},{
    usePushEach: true
  });

  
IssueSchema.plugin(deepPopulate);

module.exports=mongoose.model('Issue',IssueSchema);




//[{type:Schema.Types.ObjectId,ref:'User'}]