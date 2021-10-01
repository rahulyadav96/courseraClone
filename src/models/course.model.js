const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title:{type:String, requred:true},
    offer_by:{type:String,required:true},
    instructor:{type:mongoose.Schema.Types.ObjectId, ref:"instructor", required:true},
    languages :[{type:String, required:true}],
    discreption:{type:String, requred:true},
    reviews:{type:String, requred:false},
    starting_date:{type:String, requred:true},
    skills:[{type:mongoose.Schema.Types.ObjectId, ref:"skill", required:false}],
    properties:[{type:mongoose.Schema.Types.ObjectId, ref:"property", required:false}],
    univercity:{type:mongoose.Schema.Types.ObjectId, ref:"univercity", required:true},
    level:{type:String, required:true},
    students:{type:String, required:true},
    rating:{type:Number, required:true},
    crs_logo:{type:String, required:true},
},{
    versionKey:false
});

module.exports = mongoose.model("course", courseSchema);
