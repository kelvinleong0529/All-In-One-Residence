import React from "react";
import { Link } from "react-router-dom";

function FacilityCardItem(props) {
  return (
    <>
      <li className="facility__cards__item">
        <Link className="facility__cards__item__link">
          <figure
            className="facility__cards__item__pic-wrap"
            data-category={props.label}
          >
            <img
              src={props.src}
              alt={props.alt}
              className="facility__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h2 className="cards__item__text">{props.text}</h2>
            <h5 className="cards__item__description">{props.description}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default FacilityCardItem;
