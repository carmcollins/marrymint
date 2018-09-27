import React from "react";
import styles from "./Nav.css";

const Nav = () =>
    <div>
        {/* Main Nav */}
        <nav className="navbar-fixed">
            <div className="nav-wrapper teal lighten-3">
            <a href="#" className="brand-logo">marrymint</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">To Do List</a></li>
                <li><a href="#">Timeline</a></li>
                <li><a href="#">Vendors</a></li>
                <li><a href="#">Budget</a></li>
                <li><a href="#">RSVPs</a></li>
            </ul>
            </div>
        </nav>
        {/* Mobile Nav */}
        <ul className="sidenav teal lighten-3" id="mobile-demo">
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">To Do List</a></li>
            <li><a href="#">Timeline</a></li>
            <li><a href="#">Vendors</a></li>
            <li><a href="#">Budget</a></li>
            <li><a href="#">RSVPs</a></li>
        </ul>
    </div>
;

export default Nav;