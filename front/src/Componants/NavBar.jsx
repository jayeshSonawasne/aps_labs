import './NavBar.css'
import { json, NavLink } from 'react-router-dom'
import React, { useEffect } from 'react'
import {BiCart} from "react-icons/bi"
import { BiUser } from "react-icons/bi";
import { useState } from 'react';
import axios from "axios";

export default function NavBar() {
  const [login, setlogin] = useState({
    mobile_no:"",
    password:"",
  });
  const [registers, setregisters] = useState({
    name:"",
    mobile_no:"",
    email:"",
    password:"",
    cpassword:"",
  })
  const HanddleChangeForLogin = (e) =>{
    const {name,value} = e.target;
    setlogin({...login,[name]:value});
  }
  const HanddleChangeForRegister = (e) =>{
    const {name,value} = e.target;
    setregisters({...registers,[name]:value});
  }
  const loginUser = () =>{
    axios.post(`http://localhost:5000/login`,login).then((res)=>{
      localStorage.setItem("user",res.data.user._id)
      alert(res.data.msg);
    })
  }
  const registerUser = () =>{
    const {name ,mobile_no ,email ,password ,cpassword} = registers;
    if(name && mobile_no && email && password && cpassword){
      if(password === cpassword){
        axios.post(`http://localhost:5000/register`,registers).then((res)=>{
      alert(res.data.msg);
    })
      }else{
        alert('password not match');
      }
    }else{
      alert("invalid input");
    }
    // setregisters({
    //   name:"",
    //   mobile_no:"",
    //   email:"",
    //   password:"",
    //   cpassword:"",
    // })
  }
  const [category, setcategory] = useState([]);
  let unique = [...new Set(category.map((item)=>{return item.category}))]
  useEffect(()=>{
    axios.get(`http://localhost:5000/allcategory`).then((res)=>{
      setcategory(res.data);
    })
  },[])
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#"> <img src="https://nishitosh.github.io/apslabs/img/logo-dark.png" alt="..." height="40" className='homeimg ms-5' style={{width:"80%"}}/></NavLink>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
        <li className="nav-item active px-2">
            <NavLink className="nav-link" to="/" style={{color:"black",textDecoration:"none",fontFamily:"arial"}}>HOME</NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink className="nav-link" to="/aboutus/imbibe" style={{color:"black",textDecoration:"none",fontFamily:"arial"}}>ABOUT US</NavLink>
          </li>
          <li className="nav-item dropdown px-2">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"black"}}> PRODUCTS </NavLink>
                
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          {
                            unique.map((item)=>{
                              return(
                                <>
                                <li className="dropdown-submenu"
                                onClick={()=>{
                                  localStorage.setItem("category",item)
                                }} 
                                ><NavLink className="dropdown-item " to="/product" >{item}</NavLink>
                                <ul className="dropdown-menu">
                                {
                                  category.map((innerItem)=>{
                                    if(item===innerItem.category){
                                      return(
                                        <>
                                        {
                                          innerItem.subcategory?<li onClick={()=>{
                                            localStorage.setItem("category",innerItem.subcategory)
                                          }}><NavLink className="dropdown-item" to="/product">{innerItem.subcategory}</NavLink></li>:""
                                        }
                                        </>
                                      )
                                    }
                                  })
                                }
                                </ul>
                                </li>
                                </>
                              )
                            })
                          }
                       {/* <li className="dropdown-submenu" ><NavLink className="dropdown-item " to="/bacterialculture" >Molecular Biology</NavLink>
                                <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="#">Bacterial Culture</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">GEL & PCR Clean Up</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Tissue & Blood Tips</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">RNA Purification kits</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Food Dna Kits</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Viral Nucleic Acid</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Plants Research Kits</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">DNA Related Products</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Protien Products</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">PCR/RT-PCR Products</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">PCR clonning Logation</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Transilluminator</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Disinfectant</NavLink></li>
                                </ul>
                                </li>
                       <li className="dropdown-submenu" ><NavLink className="dropdown-item " to="/antibodies" >Antibodies & ELISA</NavLink></li>
                       <li className="dropdown-submenu" ><NavLink className="dropdown-item " to="#" >NGS (Next Gen Sequencing)</NavLink></li>
                       <li className="dropdown-submenu" ><NavLink className="dropdown-item " to="#" >Molecular Diagnostic</NavLink></li>
                       <li className="dropdown-submenu" ><NavLink className="dropdown-item " to="#" >IVF(Infertility)</NavLink></li>
                       <li className="dropdown-submenu" ><NavLink className="dropdown-item " to="#" >Plant Research</NavLink></li>
                       <li className="dropdown-submenu" ><NavLink className="dropdown-item " to="/product" >Equipments</NavLink></li>
                       <li className="dropdown-submenu" ><NavLink className="dropdown-item " to="#" >Forensics</NavLink></li>
                       <li className="dropdown-submenu" ><NavLink className="dropdown-item " to="#" >Bio-Process</NavLink>
                                <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="">Biorector</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Bioclean</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Ultra Water Purifier</NavLink></li>
                                </ul>
                                </li>
                       <li className="dropdown-submenu" ><NavLink className="dropdown-item " to="#" >Agreeculture</NavLink>
                                <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="#">Bio-Ferilizers</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Pesticide Removal</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Wireless Agri-Pumps</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Hi-Tech Drones</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Soil Forecaster</NavLink></li>
                                </ul>
                                </li>
                       <li className="dropdown-submenu" ><NavLink className="dropdown-item " to="#" >Nanotechnology</NavLink></li>
                       <li className="dropdown-submenu" ><NavLink className="dropdown-item " to="#" >Food Safety</NavLink></li>
                       <li className="dropdown-submenu" ><NavLink className="dropdown-item " to="#" >Robotics(APS TRONIX)</NavLink>
                                <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="">Artificial Inteligence</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Data Logger</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">Sensor Integration</NavLink></li>
                                </ul>
                                </li>
                       <li className="dropdown-submenu" ><NavLink className="dropdown-item " to="#" >Healthcare</NavLink></li> */}

                        </ul> 
                    </li>
                    <li className="nav-item px-2">
          <NavLink className="nav-link" to="/support" style={{color:"black",textDecoration:"none",fontFamily:"arial"}}>NEWS & GALLERY</NavLink>
          </li>
                    <li className="nav-item px-2">
          <NavLink className="nav-link" to="/support" style={{color:"black",textDecoration:"none",fontFamily:"arial"}}>RESEARCH</NavLink>
          </li>
          <li className="nav-item px-2">
          <NavLink className="nav-link" to="/contact" style={{color:"black",textDecoration:"none",fontFamily:"arial"}}>CONTACT</NavLink>          
          </li>
          <li className="nav-item px-2">
          <NavLink className="nav-link" to="/cart" style={{color:"black",textDecoration:"none",fontFamily:"arial"}}><button style={{borderRadius:"50px",border:"0px solid black",fontSize:"120%"}}><BiCart/></button></NavLink>          
          </li>
          {/* <li className="nav-item px-2">
          <NavLink className="nav-link" to="/" style={{color:"black",textDecoration:"none",fontFamily:"arial"}}><button style={{borderRadius:"50px",border:"0px solid black",fontSize:"120%"}}><BiUser/></button></NavLink>          
          </li> */}
          <li>

<div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel">Login Here</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <label htmlFor="inputPassword6" className="col-form-label">Email</label>
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"  name="mobile_no" value={login.mobile_no} onChange={HanddleChangeForLogin}/>
                    <label htmlFor="inputPassword6" className="col-form-label">Password</label>
                    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"  name="password" value={login.password} onChange={HanddleChangeForLogin}/>
                    <button className="btn btn-primary mt-3" onClick={loginUser}>Login</button>
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Sign Up</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel2">Register Here</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
                  <label htmlFor="inputPassword6" className="col-form-label">Name</label>
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"  name="name" value={registers.name} onChange={HanddleChangeForRegister}/>
                  <label htmlFor="inputPassword6" className="col-form-label">Mobile No.</label>
                    <input type="number" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"  name="mobile_no" value={registers.mobile_no} onChange={HanddleChangeForRegister}/>
                  <label htmlFor="inputPassword6" className="col-form-label">E-Mail</label>
                    <input type="email" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"  name="email" value={registers.email} onChange={HanddleChangeForRegister}/>
                    <label htmlFor="inputPassword6" className="col-form-label">Password</label>
                    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"  name="password" value={registers.password} onChange={HanddleChangeForRegister}/>
                    <label htmlFor="inputPassword6" className="col-form-label">Confirm Password</label>
                    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"  name="cpassword" value={registers.cpassword} onChange={HanddleChangeForRegister}/>
                    <button className="btn btn-primary mt-3" onClick={registerUser}>Register</button>
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Login</button>
      </div>
    </div>
  </div>
</div>
<a className="btn" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
  <NavLink className="nav-link userBtn" to="/" style={{color:"black",textDecoration:"none",fontFamily:"arial",marginTop:"-15px"}}><button style={{borderRadius:"50px",border:"0px solid black",fontSize:"120%"}}><BiUser/></button></NavLink>
   </a></li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
