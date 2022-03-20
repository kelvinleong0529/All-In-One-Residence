import React from "react";
import CardItem from "./CardItem";
import "./Card.css";

function Cards() {
  return (
    <div className="cards">
      <h1> Upcoming Activities & Events</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/pool-party.jpg"
              text="Pool & Dinner Party"
              description="Boys and girls come take a plunge. To enjoy the summer sun. Bring your suits and towels, we will have lots of fun. Come over and cool off at 4:30pm at 20 Mar 2022!"
              label="Social"
              path="/services"
            ></CardItem>
            <CardItem
              src="/images/agm.jpg"
              text="2022 Annual General Meeting"
              description="We are pleased to invite you to the 2022/2023 Annual General Meeting (AGM) which will held on 27 Mar 2022"
              label="Community"
              path="/services"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
