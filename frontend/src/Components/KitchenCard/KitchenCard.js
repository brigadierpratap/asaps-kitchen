import React from "react";
import {
  Hr,
  KCardBody,
  KCardImg,
  KitechenCardCont,
} from "./KitchenCard.styles";
import star from "../../Assets/Images/star.svg";
import clock from "../../Assets/Images/clock.svg";

function KitchenCard(props) {
  return (
    <KitechenCardCont to={`/kitchen/${props.kitchen.id}`}>
      <div style={{ height: "17em", position: "relative", overflow: "clip" }}>
        <KCardImg src={props.kitchen.image} alt={props.kitchen.name} />
        <span className="offer">
          {" "}
          <span style={{ fontFamily: "sans-serif" }}>₹</span>
          {props.kitchen.offer} OFF
        </span>
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
        <span className="estimate">
          <span style={{ fontFamily: "sans-serif" }}>₹</span>
          {props.kitchen.estimate}
        </span>
        <span className="time">
          <img
            src={clock}
            width="18"
            style={{ marginRight: "0.2em" }}
            alt="clock"
          />
          {props.kitchen.time}
        </span>
      </KCardBody>
    </KitechenCardCont>
  );
}

export default KitchenCard;
