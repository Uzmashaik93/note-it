import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createUserWithEmailAndPassword   } from "firebase/auth";
import { Navigate } from "react-router-dom";
import {useAuth} from "./auth";
import { firebaseAuth } from "../firebase-config";


const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const authContext = useAuth();
  
  if(authContext.user !== null && authContext.user !== undefined){
    return <Navigate to="/home" />
  }

  const registerClick = () => {
    (async () => {
      try {
        const user = await createUserWithEmailAndPassword(
          firebaseAuth,
          registerEmail,
          registerPassword
        );
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    })();
  };

  return (
    <div className="registerPage">
      <h1>Register</h1>
      <Form id="register-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
        </Form.Group>

        <Button onClick={registerClick} className="register">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
