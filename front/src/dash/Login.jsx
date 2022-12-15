import React from "react";
import { NavLink,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import Dashboard from "./Dashboard";
import "./loginstyle.css"

export default function Login() {
  const history = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:5000/adminlogin", user).then((res) => {
      alert(res.data.msg);
      localStorage.setItem("acknowledged",res.data.user.acknowledged)
      if (res.data.user) {
        history('/dashboard/productlist')
      }
    });
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
                            <input class="form-control" type="email" placeholder="email address" name="email" value={user.email} onChange={handleChange}/>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="password" placeholder="password" name="password" value={user.password} onChange={handleChange}/>
                        </div>
                        <button type="button" class="btn btn-default" onClick={login}>Login</button><br/><br/>
                        <span>dont have account?</span><Link to="/register">click here</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  );
}
