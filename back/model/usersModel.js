const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  mobile_no: Number,
  email: String,
  password: String,
},{timestamps:true});

const User = new mongoose.model("User", UserSchema);

module.exports = User;
