import React from "react";
import styles from "./Nav.css";

const Nav = () =>

    <div>
        {/* Desktop Side Nav */}
        <ul className="sidenav sidenav-fixed show-on-small show-on-medium show-on-large indigo lighten-4">
            <li className="brand-logo center">MARRYMINT</li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">To Do List</a></li>
            <li><a href="#">Timeline</a></li>
            <li><a href="#">Vendors</a></li>
            <li><a href="#">Budget</a></li>
            <li><a href="#">RSVPs</a></li>
        </ul>

        {/* Mobile Pop Out Side Nav */}
        <nav className="hide-on-large-only indigo lighten-4">
            <div className="nav-wrapper">
                <a className="brand-logo black-text">MARRYMINT</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons black-text">menu</i></a>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">To Do List</a></li>
                    <li><a href="#">Timeline</a></li>
                    <li><a href="#">Vendors</a></li>
                    <li><a href="#">Budget</a></li>
                    <li><a href="#">RSVPs</a></li>
                </ul>
            </div>
        </nav>
    </div>
    
;

export default Nav;