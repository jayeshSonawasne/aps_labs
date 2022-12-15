const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: { type: String, require: true },
  mobile: { type: Number, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  loggedin: { type: Boolean, require: true, default: false },
});

const admin = new mongoose.model("admin", adminSchema);

module.exports = admin;
