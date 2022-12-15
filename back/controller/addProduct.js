const product = require("../model/productModel");

const addProduct = async (req, res) => {
  try {
    await product({
      category: req.body.category,
      subcategory: req.body.subcategory,
      productname: req.body.productname,
      description: req.body.productdescription,
      oldprice: req.body.oldprice,
      newprice: req.body.newprice,
      imagePath: req.file.filename,
    }).save((err) => {
      if (err) {
        res.send({ msg: err });
      } else {
        res.send({ msg: "Product Added" });
      }
    });
  } catch (error) {
    res.send({ msg: errors });
  }
};

const allCategory = async (req, res) => {
  try {
    const data = await product.find({});
    res.send(data);
  } catch (error) {
    res.send({ msg: error });
  }
};

const perticularProduct = async (req, res) => {
  try {
    const data = await product.find({$or:[{category:req.params.category},{subcategory:req.params.category}]});
    res.send(data);
  } catch (error) {
    res.send({ msg: error });
  }
};

module.exports = { addProduct, allCategory, perticularProduct };
