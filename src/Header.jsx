import React from "react";
import Nav from 'react-bootstrap/Nav';
import imageIcon from "./assets/images/sticky-notes.png";

function Header() {
  return (
    <>    
    <header>
      <h1 className="header">
        <img src={imageIcon} alt="sticky" /> Note-It
      </h1>
    </header>  
</>


  );
}

export default Header;
