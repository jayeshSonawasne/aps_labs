import React, { useEffect, useState } from "react";

export default function ListofProducts() {
  const [counter, setcounter] = useState(0)
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allcategory").then((rslt) => {
      rslt.json().then((res) => {
        setdata(res);
      });
    });
  });
  return (
    <>
      <br />
      <h3 style={{ textAlign: "left" }}>List of products</h3>
      <br />
      <div className="table-responsive">
        <table className="table table-striped " border="1">
          <thead className="table table-dark">
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Product_img</th>
              <th scope="col">Product_Name</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, id) => {
              return (
                <>
                <tr key={id}>
                  <th scope="row">{item._id}</th>
                  <td>
                    <img
                      src={`http://localhost:5000/${item.imagePath}`}
                      className="rounded-circle"
                      alt="..."
                      width="50"
                      height="50"
                    />
                  </td>
                  <td>{item.productname}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline h-50 mt-2 btn-sm"
                      style={{ backgroundColor: "#273372", color: "white" }}
                    >
                      view
                    </button>
                  </td>
                </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
