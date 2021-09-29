const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    title:{type:String, required:true},
},{
    versionKey:false,
});

module.exports = mongoose.model("skill", skillSchema);