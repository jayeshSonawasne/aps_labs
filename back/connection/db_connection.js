const mongoose = require("mongoose");

const db = mongoose.connect(`mongodb+srv://apslabs:apslabs@cluster0.mbevfby.mongodb.net/apslabs?retryWrites=true&w=majority`,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("DB connected")
    }
})

module.exports = db;