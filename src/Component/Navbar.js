import React, { useState } from "react";
import "../styles.css";

const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <div className="navbar">
      <div>
        <span
          style={{ fontSize: "20px", cursor: "pointer" }}
          onClick={() => setToogle(!toogle)}
        >
          &#9776;
        </span>
      </div>
      <div>
        <div id="mySidenav" className={toogle ? "sidenav" : "close-sidenav"}>
          <a className="closebtn"  onClick={() => setToogle(!toogle)}>
            &times;
          </a>
          <a>About</a>
          <a>Services</a>
          <a>Clients</a>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
