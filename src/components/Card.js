import React from "react";
import './Card.css'

const Card = (props) => {
    return <React.Fragment>
        <div className="outer-div">
            <div>
                <div className="inner-div1">
                    <div className="img-div"></div>
                    <h1 className="card-heading">{props.name}</h1>
                </div>
            </div>
            <div className="inner-div2">
                <p>Duration: {props.duration}</p>
                <p>Location: {props.location}</p>
                <p>Last Date to Apply: {props.lastDateToApply}</p>
            </div>
        </div>
    </React.Fragment>
};

export default Card;