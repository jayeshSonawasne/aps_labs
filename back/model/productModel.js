const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    category: String,
    subcategory: String,
    productname: String,
    description: String,
    oldprice: Number,
    newprice: Number,
    imagePath: String,
  },
  { timestamps: true }
);

const product = new mongoose.model("product", ProductSchema);

module.exports = product;
