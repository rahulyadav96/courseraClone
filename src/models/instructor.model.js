const mongoose = require("mongoose");

const instSchema = new mongoose.Schema({
    name:{type:String, required:true},
    acheivements:{type:String, required:false},
    ins_rating:{type:Number, required:false},
    img:{type:String, required:true},
    tag:{type:String, required:false},
},{
    versionKey:false,
});

module.exports = mongoose.model("instructor",instSchema);
