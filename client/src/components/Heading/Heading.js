import React from "react";
import "./Heading.css";

const Heading = props =>
    <div className="heading-bg">
        <h1 className="page-title">{props.title}</h1>
        <h5 className="page-subtitle">{props.subtitle}</h5>
    </div>
;

export default Heading;