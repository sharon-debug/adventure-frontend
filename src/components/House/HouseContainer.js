import React from "react";
import { HouseContext } from "../HouseContext";
import HouseCard from "./HouseCard";
import "./HouseContainer.css";

function HouseContainer() {
 
    // const houseList = houses.map((house) => (
    // <HouseCard
    //   key={house.id}
    //   houseName={house.name}
    //   houseLocation={house.Location}
    //   houseDescription={house.description}
    //   houseImage={house.image_url}
    //   housePer_night={house.per_night}
    //   houseLike={house.like}
    //   house={house}
      
    // />
    
  // ));
  return (
    <div className="house-container">
      
      {/* {housesError.length > 0
        ? housesError.map((error) => (
            <span className="error-message" key={error}>
              {error}
            </span>
          ))
        : null} */}
      {/* {loading ? <h2>Loading...</h2> : houseList} */}
    </div>
  );
}

export default HouseContainer;