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
              text="Pool Party"
              description="Boys and girls come take a plunge. To enjoy the summer sun. Bring your suits and towels, we will have lots of fun."
              date="20 March 2022"
              label="Social"
              venue="Ativo Suites Infinity Pool"
              path="/services"
            ></CardItem>
            <CardItem
              src="/images/agm.jpg"
              text="2022 Annual General Meeting"
              description="Greetings! We are pleased to invite you to the 2022/2023 Annual General Meeting (AGM)"
              date="7 April 2022"
              venue="Ativo Suites Multipurpose Hall"
              label="Community"
              path="/services"
            ></CardItem>
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/yoga.jpg"
              text="Yoga Session"
              description="A class that incorporates energetic movement through a series of asanas."
              label="Mental"
              date="Every Saturday (From 26 Mar 2022 onwards)"
              venue="Ativo Suites Music Room"
              path="/services"
            ></CardItem>
            <CardItem
              src="/images/tennis.jpg"
              text="Tennis Tournament"
              description="Game... Set... Match! Calling out Tennis players to join our first-ever Table Tennis Tournament!"
              label="Sports"
              date="15 May 2022"
              venue="Ativo Suites Tennis Court"
              path="/services"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;