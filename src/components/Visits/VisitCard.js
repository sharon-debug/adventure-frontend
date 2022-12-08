import React from "react";
import "./VisitContainer.css";

function VisitCard({
  start_date,
  end_date
}) {
  return (
    <div className="visit-card">
      {/* <img src={houseImage} alt={houseName} className="house-img" /> */}
      <h3> {start_date} </h3>
      <h3> {end_date} </h3>
      {/* <p className="house-description">{houseDescription}</p> */}
      {/* <p style={{ color: "#e1f52c", fontSize: "15px" }}>per_night: ${housePrice}</p> */}
      <div className="star-card">
        {[...Array(start_date)].map((star, index) => {
          return (
            <span key={index} className="star" style={{ color: "#e1f52c" }}>
              &#9733;
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default VisitCard;