const mongoose = require ("mongoose");

const propSchema = new mongoose.Schema({

    title:{type:String, required:true},
    body:{type:String, required:false},

},{
    versionKey:false
});

module.exports = mongoose.model("property", propSchema);