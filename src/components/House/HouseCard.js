import React from "react";
import "./HouseContainer.css";
import { HouseContext } from "../HouseContext";

function HouseCard({house}){
  
 
  return (
    <div className="house-card">
      <div className="house-img">
        <img src={house.image} alt={house.name} />
      </div>
      <div className="house-info">
        
        <h4> {house.location} </h4>
         <p>    {house.description} </p>
          
          
      
      </div>
    </div>
  );
}

export default HouseCard;