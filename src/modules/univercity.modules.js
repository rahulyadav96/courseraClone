const mongoose = require("mongoose");

const unSchema = new mongoose.Schema({
    name:{type:String, required:true},
    un_rating:{type:Number, required:false},
    logo:{type:String, required:true},
    
    instructors:[{type:mongoose.Schema.Types.ObjectId, ref:"instructor", require:true}],
},{
    versionKey:false,
});

module.exports = mongoose.model("univercity",unSchema);
