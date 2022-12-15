import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import {RiDownloadCloudFill} from 'react-icons/ri'

export default function Product() {
    const [productId, setproductId] = useState();
    const [product, setproduct] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5000/perticularproduct/${localStorage.getItem("category")}`).then((res)=>{
            setproduct(res.data);
        })
    })
    const addTocart = () =>{
        axios.post(`http://localhost:5000/addtocart`,{userId:localStorage.getItem("user"),productId:productId}).then((res)=>{
            alert(res.data.msg)
        })
    }
  return (
    <div className='container-fluid'>
    <div className="row justify-content-around py-5">
        <div className="col-md-2">
            <h3>{localStorage.getItem("category")}</h3>
            <button className='btn mt-3' style={{background:"#3498DB",color:"white",border:"none",borderRadius:"0px"}}>Home/Equipments</button>
        </div>
        <div className="col-md-4">
            <img src="/Images/equipments.png" alt="..." width='100%'/>
        </div>
    </div>
    <div className="row justify-content-end">
        <div className="col-md-3">
            <button className='btn' style={{borderRadius:"20px",background:"#A085C6",color:"white"}}>Download Catalogue ››</button> <button className="btn" style={{borderRadius:"30px",background:"#EF7B45",color:"white"}}><RiDownloadCloudFill/></button>
        </div>
    </div>
    <div className="row justify-content-center">
        <div className="col-md-2 border">
            {
                product.map((item)=>{
                    return <li onClick={()=>{setproductId(item._id)}}><span>{item.productname}</span><br/><hr/></li>
                })
            }
            {/* <span>AUTOCLAVE</span><br/><hr/>
            <span>INCUBATOR</span><br/><hr/>
            <span>MUFFLE FURNACE</span><br/><hr/>
            <span>WATER BATH</span><br/><hr/>
            <span>FUME HOOD</span><br/><hr/>
            <span>LAMINAR FLOW</span><br/><hr/>
            <span>PLANT CHAMBERS</span><br/><hr/>
            <span>HUMIDITY CONTROL CABINET</span><br/><hr/>
            <span>ICE FLAKING MACHINE</span><br/><hr/>
            <span>DEEP FREEZER</span><br/><hr/>
            <span>OVEN</span><br/><hr/>
            <span>FREEZE DRYER (LYOPHILIZER)</span><br/><hr/>
            <span>VACUUM PUMP (OIL FREE)</span><br/><hr/>
            <span>pH METER</span> */}
        </div>
        {
            product.map((item)=>{
                if(item._id===productId){
                    return(
                        <>
                        <div className="col-md-6">
                        <h3>{item.productname}</h3>
                        <div className="row justify-content-center mt-4">
                        <div className="col-md-10">
                        {/* <div className="clearfix"> */}
                        <img src={`http://localhost:5000/${item.imagePath}`} alt="" className='col-md-5 float-md-start' />
                       <p style={{fontSize:"12px",fontFamily:"Open Sans', sans-serif"}}>It is used for sterilization under saturated steam pressure at any selected point between 5 to 20 p.s.i. (Optional adjustable with pressure control switch). These are double walled units with inner chamber (Boiler) made of 18 S.W.G. stainless steel and outer chamber is covered with M.S Lid is tightened by radial locking system. Fitted with neoprene rubber gasket, all systems are hydraulically tested up to 40 p.s.i., as a safety measure. All autoclaves are fitted with standard accessories such as water level indicator, pressure gauge, , steam release cock, spring loaded safety valve and heating element. Supplied complete with S.S. basket, cord and plug to work on 220/230 volts A.C. Supply. ALL DELUXE MODELS besides being fitted with STAINLESS STEEL/LID and having inner chamber made of s.s. and outer chamber stainless steel, are also fitted with VACUUM BREAKER as a SAFETY DEVICE. Provided with digital microprocessor based system for setting temperature, purge time, exhaust time etc. Autoclave is controlled with the settings on this controller</p>
                       </div>
                       </div>                    
                       { /* </div>               */}
                       <button className='btn btn-warning btn-sm' onClick={addTocart}>Add to Cart</button>         
                       </div>
                        </>
                    )
                }
            })
        }
    </div>
    </div>
  )
}
