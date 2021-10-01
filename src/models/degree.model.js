const mongoose = require("mongoose")



const degreeSchema = new mongoose.Schema({

    _id:String,

    degree_name: {type: String, required: true},
    // university: [{type: mongoose.Schema.Types.ObjectId, ref:"program", required: true}],
    programs:[{type: mongoose.Schema.Types.ObjectId, ref:"program", required: false}]

    

},
{
    versionKey:false,
    timestamps: true

})

const Degree = mongoose.model("degree",degreeSchema)

module.exports = Degree

