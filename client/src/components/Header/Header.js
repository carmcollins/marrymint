/* global M */
import React, { Component } from "react";
import styles from "./Header.css";
import tablescape from "./table-muted.jpg";

class Header extends Component {
    componentDidMount() {
        const elems = document.querySelectorAll('.parallax');
        const instances = M.Parallax.init(elems);
    }

    render() {
        return (
            <div className="parallax-container valign-wrapper">
                <h1 className="title">Bride & Groom</h1>
                <div className="parallax"><img src={tablescape}/></div>
            </div>
        );
    }
}

export default Header;