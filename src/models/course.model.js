const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title:{type:String, requred:true},
    offer_by:{type:mongoose.Schema.Types.ObjectId, ref:"unvercity", required:true},
    instructor:{type:mongoose.Schema.Types.ObjectId, ref:"instructor", required:true},
    languages :[{type:mongoose.Schema.Types.ObjectId, ref:"language", required:true}],
    discreption:{type:String, requred:true},
    preview_video:{type:String, requred:false},
    reviews:{type:Number, requred:false},
    starting_date:{type:String, requred:false},
    skills:[{type:mongoose.Schema.Types.ObjectId, ref:"skill", required:false}],
    properties:[{type:mongoose.Schema.Types.ObjectId, ref:"property", required:false}],

},{
    versionKey:false
});

module.exports = mongoose.model("course", courseSchema);
