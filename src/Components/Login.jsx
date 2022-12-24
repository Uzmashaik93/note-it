import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {signInWithEmailAndPassword} from "firebase/auth";
import {firebaseAuth} from "../firebase-config";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";


const Login  = () => {

  const [loginEmail,setLoginEmail] = useState("");
  const [loginPassword,setLoginPassword] = useState("");
  const authContext = useAuth();
  const navigate = useNavigate();


  const loginClick = () => {
    (async () => {
      try {
        const user = await signInWithEmailAndPassword(
          firebaseAuth,
          loginEmail,
          loginPassword
        );
        authContext.login(user);
        navigate("/home");

      } catch (error) {
        console.log(error.message);
      }
    })();
  };
   
    return (
        <div className="loginPage">
        <h1>Log In</h1>
        <Form id="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" onChange={(event)=>{
              setLoginEmail(event.target.value);
            }}/> 
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(event)=>{
              setLoginPassword(event.target.value);
            }} />
          </Form.Group>

          
          <Button onClick={loginClick} className="login">
            Login
          </Button>
        </Form>
        </div>

  );
}

export default Login;