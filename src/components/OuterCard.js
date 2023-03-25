import React from "react";
import './OuterCard.css'

const OuterCard = (props) => {
    return <div className="outer-box">{props.children}</div>
};

export default OuterCard;