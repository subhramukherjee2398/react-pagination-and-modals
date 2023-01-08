import React from "react";
import "../styles.css";

const Header = () => {
  return (
    <div className="hedaer">
      <div>
        <h1>Product List</h1>
      </div>
      <div className="header-btn">
        <div className="hd-btn">Add product</div>
        <div className="hd-btn">Import</div>
        <div className="hd-btn">Export to Excel</div>
      </div>
    </div>
  );
};

export default Header;
