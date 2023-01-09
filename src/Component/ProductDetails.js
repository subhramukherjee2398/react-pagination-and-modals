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
          <div className="p-name">Product : <span className="p-value">{data.title}</span></div>
          <div className="p-name">Brand : <span className="p-value">{data.brand}</span></div>
          <div className="p-name">Discount : <span className="p-value">{data.discountPercentage}%</span></div>
          <div className="p-name">Category : <span className="p-value">{data.category}</span></div>
          <div className="p-name">Price : <span className="p-value">{data.price}₹</span></div>
          <div className="p-name">Stock : <span className="p-value">{data.stock}</span></div>
          <div>
            <div className="p-name">description</div>
            <div className="p-value">{data.description}</div>
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
