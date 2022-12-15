const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_Id: String,
    product_Id: String,
    order_status: { type: Boolean, default: false },
    procurement_status: { type: Boolean, default: false },
    packaging_status: { type: Boolean, default: false },
    dispatch_status: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const order = new mongoose.model("order", orderSchema);

module.exports = order;
