const mongoose = require("mongoose");

const instSchema = new mongoose.Schema({
    name:{type:String, required:true},
    acheivements:{type:String, required:false},
    rating:{type:String, required:false},
    img:{type:String, required:true},
    occupation:{type:String, required:true},
    tag:{type:String, required:false},
    bio:{type:String, required:true}
},{
    versionKey:false,
});

module.exports = mongoose.model("instructor",instSchema);
