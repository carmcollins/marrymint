import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
//import API from "../../Utils/API";

class Nav extends Component {
    state = {
        isLoggedIn: true
    }

    handleFormLogOut = event => {
        event.preventDefault();
        API.logout();
    };

    render() {
        return (
            <div>
                {
                    this.state.isLoggedIn ? (
                        <div>
                            {/* Main Nav */}
                            <nav className="navbar-fixed">
                                <div className="nav-wrapper teal lighten-3">
                                    <a href="" className="brand-logo">marrymint</a>
                                    <a href="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                                    <ul className="right hide-on-med-and-down">
                                        <li><Link to="/to-do-list">To Do List</Link></li>
                                        <li><Link to="/rsvp">RSVPs</Link></li>
                                        <li><Link to="/vendors">Vendors</Link></li>
                                        <li><Link to="/find-vendors">Find Vendors</Link></li>
                                        <li><Link to="/" onClick={this.handleFormLogOut}>Log Out</Link></li>
                                    </ul>
                                </div>
                            </nav>
                            {/* Mobile Nav */}
                            <ul className="sidenav teal lighten-3" id="mobile-demo">
                                <li><Link to="/to-do-list">To Do List</Link></li>
                                <li><Link to="/rsvp">RSVPs</Link></li>
                                <li><Link to="/vendors">Vendors</Link></li>
                                <li><Link to="/find-vendors">Find Vendors</Link></li>
                                <li><Link to="/" onClick={this.handleFormLogOut}>Log Out</Link></li>
                            </ul>
                        </div>
                    ) : (
                            // Home Page Nav
                            <nav className="navbar-fixed">
                                <div className="nav-wrapper teal lighten-3">
                                    <a href="/" className="brand-logo home-logo center">marrymint</a>
                                </div>
                            </nav>
                        )
                }
            </div>
        );
    }
}

export default Nav;