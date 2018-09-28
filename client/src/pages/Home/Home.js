import React from "react";
import "./Home.css";

const Home = () =>
    <div className="bg-photo">
        <div className="row">
            <div className="col s12 m6 l6">
                <h3 className="intro">Track your to-do list. Find trustworthy vendors. Manage your guest list.</h3>
            </div>
            <div className="col s12 m6 l6">
                {/* SIGN UP FORM */}
                <div id="signup-form" className="row">    
                    <form className="col s12">
                        <div className="form-div">
                            <h4 className="red-text text-accent-1">Eat, Drink, & Be Married</h4>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="brides-name" type="text" className="validate"/>
                                    <label htmlFor="brides-name">Bride's First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="grooms-name" type="text" className="validate"/>
                                    <label htmlFor="grooms-name">Groom's First Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="wedding-date" type="text" className="datepicker validate"/>
                                    <label htmlFor="wedding-date">Date of Wedding</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="wedding-location" type="text" className="validate"/>
                                    <label htmlFor="wedding-location">Location of Wedding</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="signup-email" type="email" className="validate"/>
                                    <label htmlFor="signup-email">Email</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="signup-password" type="password" className="validate"/>
                                    <label htmlFor="signup-password">Password</label>
                                </div>
                            </div>
                            <br/>
                            <div className="center">
                                <a id="signup-btn" className="waves-effect waves-teal btn teal lighten-3">Sign Up</a>
                            </div>
                            <br/>
                            <div className="center">
                                <a id="login-here" className="waves-effect waves-teal btn-flat">Have an account? Log in here</a>
                            </div>
                        </div>
                    </form>
                </div>
                {/* LOG IN FORM */}
                <div id="login-form" className="row">    
                    <form className="col s12">
                        <div className="form-div">
                            <h4 className="red-text text-accent-1">Eat, Drink, & Be Married</h4>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="login-email" type="email" className="validate"/>
                                    <label htmlFor="login-email">Email</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="login-password" type="password" className="validate"/>
                                    <label htmlFor="login-password">Password</label>
                                </div>
                            </div>
                            <br/>
                            <div className="center">
                                <a id="login-btn" className="waves-effect waves-teal btn teal lighten-3">Log In</a>
                            </div>
                            <br/>
                            <div className="center">
                                <a id="signup-here" className="waves-effect waves-teal btn-flat">Need an account? Sign up here</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
;

export default Home;