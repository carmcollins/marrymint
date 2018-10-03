import React from "react";
import "./Heading.css";
import Confetti from "./confetti.jpg";
import Modern from "./modern.jpg";
import Safari from "./safari.jpg";
import Scroll from "./scroll.jpg";

const styles = {
    toDoHead: {
        backgroundImage: `url(${Modern})`
    },
    rsvpHead: {
        backgroundImage: `url(${Scroll})`
    },
    vendorsHead: {
        backgroundImage: `url(${Confetti})`
    },
    findVendorsHead: {
        backgroundImage: `url(${Safari})`
    }
}

const Heading = props =>
    <div className="heading-bg" style={styles[props.bg]}>
        <h1 className="heading-title">{props.title}</h1>
        <h5 className="heading-subtitle">{props.subtitle}</h5>
    </div>
;

export default Heading;