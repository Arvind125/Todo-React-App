import React from "react";
import "./Cards.css";

const Cards = (props) => {
  let classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Cards;