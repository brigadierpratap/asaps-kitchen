import React from "react";
import {
  Hr,
  KCardBody,
  KCardImg,
  KitechenCardCont,
} from "./KitchenCard.styles";
import star from "../../Assets/Images/star.svg";
function KitchenCard(props) {
  return (
    <KitechenCardCont to={`/kitchen/${props.kitchen.id}`}>
      <div style={{ height: "20em" }}>
        <KCardImg src={props.kitchen.image} alt={props.kitchen.name} />
      </div>
      <KCardBody>
        {" "}
        <span className="name">{props.kitchen.name}</span>
        <span className="rating">
          <img src={star} alt="star" />
          {props.kitchen.rating}
        </span>
      </KCardBody>
      <KCardBody>
        <span className="subtitle">{props.kitchen.tags}</span>
      </KCardBody>
      <Hr />
      <KCardBody>
        <span className="estimate">{props.kitchen.estimate}</span>
        <span className="time">{props.kitchen.time}</span>
      </KCardBody>
    </KitechenCardCont>
  );
}

export default KitchenCard;
