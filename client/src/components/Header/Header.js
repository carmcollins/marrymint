import React from "react";
import styles from "./Header.css";
import tablescape from "./table-muted.jpg";

const Header = () =>
    <div className="parallax-container valign-wrapper">
        <h1 className="title">Bride & Groom</h1>
        <div className="parallax"><img src={tablescape}/></div>
    </div>
;

export default Header;