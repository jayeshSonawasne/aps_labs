import React from "react";
import axios from "axios";
import { useState } from "react";

export default function AddProduct() {
  
  const [product, setproduct] = useState({
    category: "",
    subcategory: "",
    productname: "",
    oldprice: "",
    newprice:"",
    productdescription:"",

  });
  const [productImg, setproductImg] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setproduct({
      ...product,
      [name]: value,
    });
  };
  const AddProduct = () => {
    const form = new FormData();
    form.append("category",product.category)
    form.append("subcategory",product.subcategory)
    form.append("productname",product.productname)
    form.append("oldprice",product.oldprice)
    form.append("newprice",product.newprice)
    form.append("productdescription",product.productdescription)
    form.append("productImage",productImg);
    axios.post(`http://localhost:5000/addproduct`,form).then((res)=>{
      alert(res.data.msg);
    })
  };

  return (
    <><br/>
    <h3>Add Product</h3><br/>
      <form>
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <label className="form-label">
                Product Category
              </label>
              <input type="text" className="form-control" name="category" value={product.category} onChange={handleChange} />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label">
                Product Subcategory
              </label>
              <input type="text" className="form-control" name="subcategory" value={product.subcategory} onChange={handleChange}/>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <label className="form-label" for="form6Example1">
                Product Name
              </label>
              <input type="text"  className="form-control" name="productname" value={product.productname} onChange={handleChange}/>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label" for="form6Example2">
                Old Price
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="$"
                name="oldprice"
                value={product.oldprice}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>{" "}
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <label className="form-label">
                Product Image
              </label>
              <input type="file" id="form6Example1" className="form-control" name="productimg" onChange={(e)=>{setproductImg(e.target.files[0])}}/>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label">
                New Price
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="$"
                name="newprice"
                value={product.newprice}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form-outline mb-4">
          <label className="form-label">
            Product Description
          </label>
          <textarea className="form-control" rows="4" name="productdescription" value={product.productdescription} onChange={handleChange}></textarea>
        </div>
        <div className="d-grid gap-2" onClick={AddProduct}>
          <button className="btn btn-primary" type="button">
            Add Product
          </button>
        </div>
      </form>
    </>
  );
}
