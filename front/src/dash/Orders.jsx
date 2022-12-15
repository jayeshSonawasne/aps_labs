import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';

export default function Orders() {
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
  const acceptOrder = (e) =>{
    axios.put(`http://localhost:5000/acceptorder/${e.target.value}`).then((res)=>{
      alert(res.data.msg)
    })
  }

  return (
    <div className='container'>{console.log(products)}
      <div className="row">
        <div className="col-md-10">
          <b><h3>Product List</h3></b> 
          </div>
        <div className="col-md-2 text-center">
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
                if(item.order_status===false && item.product_Id===innerItem._id){
                  return(
                    <>
                    <div className="row">
                        <div className="col-md-10">
                          <h5>{innerItem.productname}</h5>
                        </div>
                    <div className="col-md-2 text-center">
                        <button className='btn btn-primary btn-sm m-2' value={item._id} onClick={acceptOrder}>Accept</button>     
                        <button className='btn btn-primary btn-sm m-2'>View</button>     
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
        <div className="col-md-10">
          <h5>MUFFLE FURNACE</h5>
          </div>
        <div className="col-md-2 text-center">
        <button className='btn btn-primary btn-sm m-2'>Accept</button>  
        <button className='btn btn-primary btn-sm m-2'>View</button>     
           </div>
      </div>
      <div className="row">
        <div className="col-md-10">
          <h5>AUTOCLAVE</h5>
          </div>
        <div className="col-md-2 text-center">
        <button className='btn btn-primary btn-sm m-2'>Accept</button>  
        <button className='btn btn-primary btn-sm m-2'>View</button>     
           </div>
      </div>
      <div className="row">
        <div className="col-md-10">
          <h5>OVEN</h5>
          </div>
        <div className="col-md-2 text-center">
        <button className='btn btn-primary btn-sm m-2'>Accept</button>    
        <button className='btn btn-primary btn-sm m-2'>View</button>     
           </div>
      </div>
      <div className="row">
        <div className="col-md-10">
          <h5>ICE FLAKING MACHINE</h5>
          </div>
        <div className="col-md-2 text-center">
        <button className='btn btn-primary btn-sm m-2'>Accept</button>    
        <button className='btn btn-primary btn-sm m-2'>View</button>     
           </div>
      </div> */}
     
      
    </div>
  )
}
