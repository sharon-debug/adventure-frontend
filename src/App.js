import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HouseContainer from "./components/House/HouseContainer";
import {HouseContext} from "./components/HouseContext";
import  HousePage from "./components/HousePage/HousePage";
import ReviewForm from "./components/Reviews/ReviewForm";
import Login from "./components/Login/Login";
import ReviewContainer from  "./components/Reviews/ReviewContainer";
import Footer from "./components/Footer";
// import SignUp from "./Components/Signup/Signup";
import "./index.css";
import Home from "./components/Home";

function App() {
    return (
      
      <div className="App">
        <BrowserRouter>
        <NavBar/> 
         {/* <Home/> */}
         <ReviewContainer/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route  path="/houses" element={<HousePage/>}/>
          {/* <Route  path="/reviews" element={<Review/>}/> */}
          {/* <Route path="/contact" element={<ContactUs/>}/> */}
          <Route path="login" element={<Login/>}/>
          </Routes>
      <Footer /> 
 </BrowserRouter>
 </div>

 
 );
 } 
    
export default App;

 

