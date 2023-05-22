import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items itms">
            <CardItem
              src="images/adminhardware.jpg"
              text="Add Hardware"
              path="/addHardware"
            />
            <CardItem
              src="images/materials.jpg"
              text="Add Material"
              path="/addHardwareItem"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
