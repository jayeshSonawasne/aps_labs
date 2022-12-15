const User = require("../Model/usersModel");
const bcrypt = require("bcrypt");

const Login = async (req, res) => {
    console.log(req.body)
  const { mobile_no, password } = req.body;
  User.findOne({ email: mobile_no }, (err, user) => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          res.send({ msg: "Login Successfull", user: user });
        } else {
          res.send({ msg: "Password didn't match" });
        }
      });
    } else {
      res.send({ msg: "User not registered" });
    }
  });
};
const Register = async (req, res) => {
    console.log(req.body)
  const { name, email, password, mobile_no } = req.body;
  const BcryptPass = await bcrypt.hash(password, 10);
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ msg: "User already registerd" });
    } else {
      const user = new User({
        name: name,
        mobile_no: mobile_no,
        email: email,
        password: BcryptPass,
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

module.exports = {
  Login,
  Register,
};
