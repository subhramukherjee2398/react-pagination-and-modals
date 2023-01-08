import React from "react";
import "../styles.css";

const Header = () => {
  return (
    <div className="hedaer">
      <div>Product list</div>
      <div className="header-btn">
        <button>Add product</button>
        <button>Import</button>
        <button>Export to Excel</button>
      </div>
    </div>
  );
};

export default Header;
