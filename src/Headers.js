import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const MenuItem = ({active, children, to}) => (
    <div className="menu-item">
      {children}
    </div>
)

const Headers = (onStateChange) => {
  return(
    <div>
      <div className="logo" align="center">
          <a href="http://localhost:3000/"><img src={require("./imgs/class101.png")} alt="logo" width="200" height="60"/></a>
      </div>
      
  </div>

  );
}

export default Headers;
