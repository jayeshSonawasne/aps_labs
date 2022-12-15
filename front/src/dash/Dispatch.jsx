import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react'

export default function Dispatch() {
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
  return (
    <div className='container'>
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
                if(item.order_status===true && item.procurement_status === true && item.packaging_status === true && item.dispatch_status === false && item.product_Id===innerItem._id){
                  return(
                    <>
                      <div className="row">
                         <div className="col-md-10">
                            <h5>{innerItem.productname}</h5>
                             </div>
                                <div className="col-md-2 text-center">
                               <button className='btn btn-primary btn-sm m-2'>Dispatched</button>          
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
  </div>
  )
}
