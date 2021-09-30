const mongoose = require("mongoose")



const programsSchema = new mongoose.Schema({

    imageUrl: {type:String, required: true},

    program_name:{type: String, required: true},
    offered_by: {type: String, required: true},



    duration: {type: String, required: true},
    description: {type:String, required: true}
    


},
{
    versionKey:false,
    timestamps: true



    
})

const Program = mongoose.model("program", programsSchema)

module.exports = Program