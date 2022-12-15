const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: String,
    productId: String,
    order_status: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const cart = new mongoose.model("cart", cartSchema);

module.exports = cart;
