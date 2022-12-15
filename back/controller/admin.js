const admin = require("../model/adminModel");
const bcrypt = require("bcrypt");

const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  admin.updateOne(
    { email: email, password: password },
    {
      $set: {
        loggedin: true,
      },
    },
    (err, user) => {
      if (user) {
        //   bcrypt.compare(saltpassword, user.password, function (err, result) {
        if (user) {
          res.send({ msg: "Login Successfull", user: user });
        } else {
          res.send({ msg: "Password didn't match" });
        }
        //   });
      } else {
        res.send({ msg: "User not registered" });
      }
    }
  );
};
const adminRegister = async (req, res) => {
  //   console.log(req.body);
  const { name, email, password, mobile } = req.body;
  const saltpassword = toString(password);
  const BcryptPass = await bcrypt.hash(saltpassword, 10);
  admin.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ msg: "User already registerd" });
    } else {
      const user = new admin({
        name: name,
        mobile: mobile,
        email: email,
        password: password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ msg: "Successfully Registered", user });
        }
      });
    }
  });
};

module.exports = { adminLogin, adminRegister };
