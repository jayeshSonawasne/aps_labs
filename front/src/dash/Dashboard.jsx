import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
// import { MdProductionQuantityLimits } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";
import { MdSettings } from "react-icons/md";
import { FcAddDatabase } from "react-icons/fc";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { NavLink,Link, Outlet } from "react-router-dom";
// import ListofProducts from "./ListofProducts";
// import AddProduct from "./AddProduct";
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {
  const history = useNavigate();
  const [change, setchange] = useState(0);
  
  useEffect(() => {
    document.querySelector("body").classList.toggle("active");
    if(!localStorage.getItem("acknowledged")){
      history("/");
    }
  }, [change]);

  return (
    <>
      <div className="wrapper">
        <div className="section">
          <div className="top_navbar">
            <div
              className="hamburger"
              onClick={() => {
                setchange(change + 1);
              }}
            >
              <NavLink to="#">
                <AiOutlineMenuUnfold />
              </NavLink>
            </div>
            <marquee>
              <p
                style={{
                  marginTop: "13px",
                  color: "white",
                  fontFamily: "monotype corsiva",
                }}
              >
                Hello...Admin
              </p>
            </marquee>
          </div>

          <div className="container">
          {/* <Routes>
            <Route path="/productlist" element={<ListofProducts />}></Route>
            <Route path="/addproduct" element={<AddProduct/>}></Route>
          </Routes> */}
          <Outlet/>
          </div>
        </div>

        <div className="sidebar">
          <div className="profile">
            <img
              src="data:image/jpeg;base64,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"
              alt="profile_picture"
            />
            <br />
            <h4>
              <span style={{ color: "rgb(23, 178, 6)", fontWeight: "bolder" }}>
                A
              </span>
              <span style={{ color: "blue", fontWeight: "bolder" }}>P</span>
              <span style={{ color: "maroon", fontWeight: "bolder" }}>S</span>
              <span style={{ color: "black", fontWeight: "bolder" }}>
                {" "}
                Labs
              </span>
            </h4>
            <p>Admin Panel</p>
          </div>
          <ul>
            <li>
              <Link to="productlist" className="abc">
                <span className="icon">
                  <RiDashboardFill />
                </span>
                <span className="item">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="addproduct" className="abc">
                <span className="icon">
                  <FcAddDatabase />
                </span>
                <span className="item">Add Product</span>
              </Link>
            </li>
            <li>
              <Link to="order" className="abc">
                <span className="icon">
                  <MdOutlineProductionQuantityLimits />
                </span>
                <span className="item">Orders</span>
              </Link>
            </li>

            <li>
              <Link to="procurement" className="abc">
                <span className="icon">
                  <FiUserPlus />
                </span>
                <span className="item">Procurement</span>
              </Link>
            </li>
            <li>
              <Link to="packaging" className="abc">
                <span className="icon">
                  <MdSettings />
                </span>
                <span className="item">Packaging</span>
              </Link>
            </li>
            <li>
              <Link to="dispatch" className="abc">
                <span className="icon">
                  <MdSettings />
                </span>
                <span className="item">Dispatch</span>
              </Link>
            </li>
            <li>
              <Link to="logout" className="abc">
                <span className="icon">
                  <MdSettings />
                </span>
                <span className="item">Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    
    </>
  );
}
