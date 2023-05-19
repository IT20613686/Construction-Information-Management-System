import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/construction.jpg"
              text="Construction Companies"
              path="/"
            />
            <CardItem
              src="images/hardware.jpg"
              text="Hardwares"
              path="/customerHardware"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/water.jpg"
              text="Water Connection"
              path="/"
            />
            <CardItem
              src="images/power.jpg"
              text="Power Connection"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
