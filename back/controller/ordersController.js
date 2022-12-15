const order = require("../model/ordersModel");

const placeOrder = async (req, res) => {
  try {
    await order({
      user_Id: req.body.userId,
      product_Id: req.body.productId,
    }).save((err) => {
      if (err) {
        res.send({ msg: "order not placed" });
      } else {
        res.send({ msg: "order placed" });
      }
    });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

const allOrders = async (req, res) => {
  try {
    const data = await order.find({});
    res.send(data);
  } catch (error) {
    res.send({ msg: error });
  }
};

const acceptOrder = async (req, res) => {
  try {
    await order.updateOne(
      { _id: req.params.id },
      {
        $set: {
          order_status: true,
        },
      },
      res.send({ msg: "order accepted" })
    );
  } catch (error) {
    res.send({ msg: error });
  }
};

const acceptProcurement = async (req, res) => {
  try {
    await order.updateOne(
      { _id: req.params.id },
      {
        $set: {
          procurement_status: true,
        },
      },
      res.send({ msg: "product is available" })
    );
  } catch (error) {
    res.send({ msg: error });
  }
};

const packagingOrder = async (req, res) => {
  try {
    await order.updateOne(
      { _id: req.params.id },
      {
        $set: {
          packaging_status: true,
        },
      },
      res.send({ msg: "order dispatched" })
    );
  } catch (error) {
    res.send({ msg: error });
  }
};

module.exports = {
  placeOrder,
  allOrders,
  acceptOrder,
  acceptProcurement,
  packagingOrder,
};
