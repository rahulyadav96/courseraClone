const mongoose = require("mongoose");

const unSchema = new mongoose.Schema({
    un_name:{type:String, required:true},
    logo:{type:String, required:true},
    about:{type:String, required:true},
    faculty:[{type:mongoose.Schema.Types.ObjectId, ref:"intructor", required:true}],
    of_logo:{type:String, required:true},
},{
    versionKey:false,
});

module.exports = mongoose.model("univercity",unSchema);
