const mongoose = require("mongoose");
const connect = () =>{

    return mongoose.connect("mongodb+srv://mrahul:inception96@cluster0.svbf8.mongodb.net/coursera?retryWrites=true&w=majority");

}
module.exports = connect;