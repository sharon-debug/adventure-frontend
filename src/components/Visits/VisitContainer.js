import React from "react";

import VisitCard from "./VisitCard";
import "./VisitContainer.css";
function VisitContainer({ visits }) {
 
  const visitList = visits?.map((visit) => (
    <VisitCard
      key={visit.id}
      visitStart_Date={visit.start_date}
      visitEnd_Date={visit.end_date}
      
      
    />
  ));
  return (
    <>
      <h3
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "#e1f52c",
          textDecorationColor: "#e1f52c",
          textDecoration: "underline",
        }}
      >
        Available Houses
      </h3>

      <div id="visit-container">{visitList}</div>
    </>
  );
}

export default VisitContainer;