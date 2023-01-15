import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";
import Login from "./Components/Login";
import Home from "./Home";
import Register from "./Components/Register";
import WelcomePage from "./WelcomePage";
import Profile from "./Profile";
import { AuthProvider } from "./Components/auth";

function App() {


  return (
    <AuthProvider>
      
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/register" element={<><Header/><Register /></>} />
          <Route path="/login" element={<><Header/><Login /></>} />
          <Route path="/home" element={<><Header/><Home /></>} />
          <Route path="/profile" element={<><Header/><Profile /></>} />
          <Route path="/*" element={<Navigate to="/welcome" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
