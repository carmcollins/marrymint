import React from "react";

const Nav = () =>
    <nav>
        <div className="nav-wrapper">
        <a className="brand-logo">Marrymint</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
        </ul>
        </div>
    </nav>
;

export default Nav;