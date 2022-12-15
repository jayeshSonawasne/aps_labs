
import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink,Link } from 'react-router-dom';

const Register = () => {
  const history = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, cpassword, mobile } = user;
    if (
      name &&
      email &&
      password &&
      password && cpassword &&
      mobile
    ) {
      if(password === cpassword){
        axios.post("http://localhost:5000/adminregister", user).then((res) => {
        alert(res.data.msg);
        history("/");
      });
      }else{
        alert("password not match");
      } 
    } else {
      alert("invlid input");
    }
  };

  return (
    <>
     <div class="form-bg">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-4">
                <div class="form-container">
                    <div class="form-icon"><i class="fa fa-user"></i></div>
                    <h3 class="title">Login</h3>
                    <form class="form-horizontal">
                        <div class="form-group">
                            <input class="form-control" type="name" placeholder="your name" name="name" value={user.name} onChange={handleChange}/>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="email" placeholder="email address" name="email" value={user.email} onChange={handleChange}/>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="mobile" placeholder="mobile" name="mobile" value={user.mobile} onChange={handleChange}/>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="password" placeholder="password" name="password" value={user.password} onChange={handleChange}/>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="cpassword" placeholder="confirm password" name="cpassword" value={user.cpassword} onChange={handleChange}/>
                        </div>
                        <button type="button" class="btn btn-default" onClick={register}>Register</button><br/><br/>
                        <span>existing user?</span><Link to="/">click here</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  );
};

export default Register;
