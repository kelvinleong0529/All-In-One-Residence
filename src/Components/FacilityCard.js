import React from "react";
import FacilityCardItem from "./FacilityCardItem";
import "./FacilityCard.css";

function FacilityCard() {
  return (
    <div className="facility__card">
      <h1>Facilities</h1>
      <div className="facility__cards__container">
        <div className="facility__cards__wrapper">
          <ul className="facility__cards__items">
            <FacilityCardItem
              src="/images/infinity-pool.jpg"
              text="Infinity Pool"
            ></FacilityCardItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FacilityCard;
