import React from "react";
import VisitContainer  from "../Visits/VisitContainer";
import { HouseContext } from "../HouseContext";
import ReviewContainer from "../Reviews/ReviewContainer";
import ReviewForm from "../Reviews/ReviewForm";
import "./HousePage.css";
import HouseCard from "../House/HouseCard";
import { useEffect, useState } from "react";

export default function HousePage () {


 const [houses, setHouses] = useState([]);
 useEffect(()=>{
  fetch("http://127.0.0.1:3000/houses")
  .then((response)=>response.json())
  .then((houses)=>{setHouses(houses)})
 },[])

  return (
    <>
    
      <div className="house-page">
        
          {houses.map((house)=>{
            return(<HouseCard house={house}/>

            
            )
            
          })}
          
          
      
      
    
        
      </div>
    </>
  )
}

