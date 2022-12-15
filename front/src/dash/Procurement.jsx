import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';

export default function Procurement() {
  const [products, setproducts] = useState([])
  const [orders, setorders] = useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:5000/allorders`).then((res)=>{
      setorders(res.data);
    })
    axios.get(`http://localhost:5000/allcategory`).then((res)=>{
      setproducts(res.data);
    })
  })

  const procurementOrder = (e) =>{
    axios.put(`http://localhost:5000/procurementstatus/${e.target.value}`).then((res)=>{
      alert(res.data.msg);
    })
  }
  
  return (
    <div className='container'>
    <div className="row">
      <div className="col-md-9">
        <b><h3>Product List</h3></b> 
        </div>
      <div className="col-md-3 text-center">
        <b><h3 className='text-center'>Action</h3></b>        
         </div>
    </div>
    <hr/>
    {
        orders.map((item)=>{
          return(
            <>
            {
              products.map((innerItem)=>{
                if(item.order_status===true && item.procurement_status === false && item.product_Id===innerItem._id){
                  return(
                    <>
                      <div className="row">
                         <div className="col-md-9">
                           <h5>{innerItem.productname}</h5>
                         </div>
                      <div className="col-md-3 text-center">
                         <button className='btn btn-primary btn-sm m-2' value={item._id} onClick={procurementOrder}>Available</button>     
                         <button className='btn btn-primary btn-sm m-2'>Order</button>     
                      </div>
                      </div>
                    </>
                  )
                }
              })
            }
            </>
          )
        })
      }
 
      {/* <div className="row">
        <div className="col-md-9">
          <h5>MUFFLE FURNACE</h5>
          </div>
        <div className="col-md-3 text-center">
        <button className='btn btn-primary btn-sm m-2'>Available</button>  
        <button className='btn btn-primary btn-sm m-2'>Order</button>     
          </div>
      </div>
      <div className="row">
        <div className="col-md-9">
          <h5>AUTOCLAVE</h5>
          </div>
        <div className="col-md-3 text-center">
        <button className='btn btn-primary btn-sm m-2'>Available</button>  
        <button className='btn btn-primary btn-sm m-2'>Order</button>     
          </div>
      </div>
      <div className="row">
        <div className="col-md-9">
          <h5>OVEN</h5>
          </div>
        <div className="col-md-3 text-center">
        <button className='btn btn-primary btn-sm m-2'>Available</button>    
        <button className='btn btn-primary btn-sm m-2'>Order</button>     
          </div>
      </div>
      <div className="row">
        <div className="col-md-9">
          <h5>ICE FLAKING MACHINE</h5>
          </div>
        <div className="col-md-3 text-center">
        <button className='btn btn-primary btn-sm m-2'>Available</button>    
        <button className='btn btn-primary btn-sm m-2'>Order</button>     
          </div>
      </div> */}
   
    
  </div>
  )
}
