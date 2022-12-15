const cart = require("../model/cartModel");

const AddToCart = async (req, res) => {
  try {
    await cart({
      userId: req.body.userId,
      productId: req.body.productId,
    }).save((err) => {
      if (err) {
        res.send({ msg: err });
      } else {
        res.send({ msg: "Item Add To Cart" });
      }
    });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

const getCartItem = async (req, res) => {
  try {
    const data = await cart.find({});
    res.send(data);
  } catch (error) {
    res.send({ msg: error.message });
  }
};

const cartStatus = async (req, res) => {
  try {
    await cart.updateOne(
      { productId: req.params.id },
      {
        $set: {
          order_status: true,
        },
      },
      res.send({ msg: "cart status updated" })
    );
  } catch (error) {
    res.send({ msg: error });
  }
};
module.exports = { AddToCart, getCartItem, cartStatus };
