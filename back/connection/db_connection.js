const mongoose = require("mongoose");

const db = mongoose.connect(`mongodb://localhost:27017/apslabDB`,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("DB connected")
    }
})

module.exports = db;