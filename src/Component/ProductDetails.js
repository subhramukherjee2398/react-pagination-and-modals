import React from "react";
import "./product.css";

const Product = ({ data,closeModal }) => {
  console.log(data);
  return (
    <div>
      <div className="close-product">
        <div className="close-item">
          <a  onClick={()=>closeModal()} className="closebtn">&times;</a>
        </div>
      </div>
      <div className="product-card">
        <div>
          <img src={data.thumbnail} alt="product-img" />
        </div>
        <div className="product-card-details">
          <div>Product : {data.title}</div>
          <div>Brand : {data.brand}</div>
          <div>Discount : {data.discountPercentage}%</div>
          <div>Category : {data.category}</div>
          <div>Price : {data.price}</div>
          <div>Stock : {data.stock}</div>
          <div>
            <div>description</div>
            <div>{data.description}</div>
          </div>
        </div>
      </div>
      <div className="small-images">
        {data?.images.map((e) => (
          <img
            src={e}
            alt="product"
            className="sm-img"
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
