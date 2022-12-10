import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import  HousePage from "./components/HousePage/HousePage";
import Login from "./components/Login/Login";
import ReviewContainer from  "./components/Reviews/ReviewContainer";
import Footer from "./components/Footer";
// import SignUp from "./Components/Signup/Signup";
import "./index.css";
import Enroll from "./components/Enroll";


function App() {
    return (
      
      <div className="App">
        <BrowserRouter>
        <NavBar/>
       

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route  path="/houses" element={<HousePage/>}/>
          <Route  path="/reviews" element={<ReviewContainer/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/enroll" element={<Enroll/>}        />
          </Routes>
      <Footer /> 
 </BrowserRouter>
 </div>

 
 );
 } 
    
export default App;

 

