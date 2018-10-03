import React, { Component } from "react";
import "./Home.css";
import API from "../../utils/API";
import { Redirect } from "react-router"

class Home extends Component {
    state = {
        email: "",
        password: "",
        brideName: "",
        id:"",
        redirect:false
    };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.email && this.state.password && this.state.brideName) {
            API.saveUser({
                bride: this.state.brideName,
                email: this.state.email,
                password: this.state.password
            })
                .catch(err => console.log(err.response));
        }

        //Clears form
        this.setState({
            email: "",
            password: "",
            brideName: ""
        });
    };

    handleFormLogin = event => {

        event.preventDefault();
        if (this.state.email && this.state.password) {
            API.loginUser({
                email: this.state.email,
                password: this.state.password
            }).then(() =>
            this.setState({redirect: true})
            ).then(()=> API.isLoggedIn())
        }

        //Clears form
        this.setState({
            email: "",
            password: ""
        });
    };

    render() {
        const { redirect } = this.state
        if(redirect)
        return (<Redirect to ={{
            pathname: "./to-do-list"
        }} />)
        return (
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
                                        <div className="input-field col s12">
                                            <input id="brides-name" type="text" className="validate" name="brideName" value={this.state.brideName}
                                                onChange={this.handleInputChange} />
                                            <label htmlFor="brides-name">Name</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="signup-email" type="email" className="validate" name="email" value={this.state.email}
                                                onChange={this.handleInputChange} />
                                            <label htmlFor="signup-email">Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="signup-password" type="password" className="validate" name="password" value={this.state.password}
                                                onChange={this.handleInputChange} />
                                            <label htmlFor="signup-password">Password</label>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="center">
                                        <a id="signup-btn" className="waves-effect waves-teal btn teal lighten-3"
                                            onClick={this.handleFormSubmit}>Sign Up</a>
                                    </div>
                                    <br />
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
                                            <input id="login-email" type="email" className="validate" name="email" value={this.state.email}
                                                onChange={this.handleInputChange} />
                                            <label htmlFor="login-email">Email</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input id="login-password" type="password" className="validate" name="password" value={this.state.password}
                                                onChange={this.handleInputChange} />
                                            <label htmlFor="login-password">Password</label>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="center">
                                        <a id="login-btn" className="waves-effect waves-teal btn teal lighten-3" onClick={this.handleFormLogin}>Log In</a>
                                    </div>
                                    <br />
                                    <div className="center">
                                        <a id="signup-here" className="waves-effect waves-teal btn-flat">Need an account? Sign up here</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;