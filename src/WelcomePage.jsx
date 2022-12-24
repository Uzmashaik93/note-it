import React from "react";
import imageIcon from "./assets/images/sticky-notes.png";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="welcomeDiv">
      <img className="welcomeImage" src={imageIcon} alt="sticky" />
      <p className="welcomeText">Note-It</p>
      <Link to="/register">
      <Button className="registerbtn" type="submit">
        Register
      </Button>
      </Link>
      <Link to="/login">
      <Button className="loginbtn" type="submit">
        Login
      </Button>
      </Link>
      
    </div>
  );
}
