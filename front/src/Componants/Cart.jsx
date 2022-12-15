import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Cart() {
    const [cartItem, setcartItem] = useState([]);
    const [product,setproduct] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/getcartitem`).then((res)=>{
            setcartItem(res.data);
        })
    })
    useEffect(()=>{
        axios.get(`http://localhost:5000/allcategory`).then((res)=>{
            setproduct(res.data);
        })
    },[])
    const placeOrder = (e) =>{
        axios.put(`http://localhost:5000/orderplace`,{userId:localStorage.getItem("user"),productId:e.target.value}).then((res)=>{
            alert(res.data.msg);
        })
        axios.put(`http://localhost:5000/cartstatus/${e.target.value}`).then((res)=>{
            console.log(res.data);
        })
    }
  return (
    <div>
        <ul>
            {
                cartItem.map((item)=>{
                    return(
                        <>
                        {
                            product.map((innerItem)=>{
                                if(item.order_status===false && item.productId===innerItem._id){
                                    return (
                                    <>
                                    <li>{innerItem.productname}</li><button className='btn btn-primary btn-sm' value={innerItem._id} onClick={placeOrder}>place order</button>
                                    </>
                                    )
                                }
                            })
                        }
                        </>
                    )
                })
            }
        </ul>
    </div>
  )
}
