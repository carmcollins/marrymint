import React, { Component } from "react";
import Heading from "../../components/Heading";
import List from "../../components/List"
import API from "../../utils/API";

class RSVPs extends Component {


    state = {
        name: "",
        invited: [],
        attending: [],
        notAttending: []
    };

    componentDidMount() {

        this.getRSVPS()
    };

    getRSVPS = () => {
        API.getRSVPS()
            .then(res => {
console.log(res)
                const stateObj = {
                    invited: [],
                    attending: [],
                    notAttending: []
                };

                for (let i = 0; i < res.data.RSVPS.length; i++) {
                    if (res.data.RSVPS[i].invited && !res.data.RSVPS[i].attending && !res.data.RSVPS[i].notAttending) {
                        stateObj.invited.push(res.data.RSVPS[i])
                    }
                    else if (res.data.RSVPS[i].invited && res.data.RSVPS[i].attending && !res.data.RSVPS[i].notAttending) {
                        stateObj.attending.push(res.data.RSVPS[i])
                    }
                    else if (res.data.RSVPS[i].invited && !res.data.RSVPS[i].attending && res.data.RSVPS[i].notAttending) {
                        stateObj.notAttending.push(res.data.RSVPS[i])
                    }

                }
                this.setState(stateObj);
            }
            ).catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log( "this is the new name: " + this.state.name)
        if (this.state.name) {
            API.addRSVP(this.state.name
            ).catch(err => console.log(err.response));
        }
        this.getRSVPS();
    };

    handleAttend = (RSVPid) => {
        console.log(RSVPid)
        API.updateRSVPAttend(RSVPid).then (() => {
            console.log("AM I RUNNING");
            this.getRSVPS();
        });
    };


    handleNoAttend = (RSVPid) => {
        console.log(RSVPid)
        API.updateRSVPNotAttend(RSVPid).then (() => {
            console.log("AM I RUNNING");
            this.getRSVPS();
        });
    };


    render() {

        return (
            <div>
                <Heading bg="rsvpHead" title="RSVPs" subtitle="Input all of your wedding guests' names into our database, and easily track their attendance as your invite responses come in." />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12 l12">
                            <div className="row">
                                <form className="col s12">
                                    <div className="form-div">
                                        <h4 className="red-text text-accent-1">Add Guests Here</h4>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input id="guest-name" type="text" className="validate" name="name" value={this.state.name}
                                                    onChange={this.handleInputChange} />
                                                <label htmlFor="guest-name">Name</label>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="center">
                                            <a id="addGuest-btn" className="waves-effect waves-teal btn teal lighten-3"
                                                onClick={this.handleFormSubmit}>Add Guest</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="row">
                                <div className="col s12 m12 l4">
                                    <h4 className="subtitle center">Invited</h4>
                                    <ul className="collection">
                                        {this.state.invited.length ? (
                                            <List>
                                                {this.state.invited.map(invited => (
                                                    <li className="collection-item" key={invited._id}>
                                                        <div>{invited.name}
                                                            <a href="" className="secondary-content rsvp-no" onClick={() => this.handleNoAttend(invited._id)}><i className="material-icons">clear</i></a>
                                                            <a href="" className="secondary-content rsvp-yes"><i className="material-icons" onClick={() => this.handleAttend(invited._id)}>done</i></a>
                                                        </div>
                                                    </li>
                                                ))}
                                            </List>
                                        ) : (<h2 className="text-center">{this.state.message}</h2>)}
                                    </ul>
                                </div>
                                <div className="col s12 m6 l4">
                                    <h4 className="subtitle center">Attending</h4>
                                    <ul className="collection">
                                        {this.state.attending.length ? (
                                            <List>
                                                {this.state.attending.map(attending => (
                                                    <li className="collection-item" key={attending._id}>{attending.name}</li>
                                                ))}
                                            </List>
                                        ) : (<h2 className="text-center">{this.state.message}</h2>)}
                                    </ul>
                                </div>
                                <div className="col s12 m6 l4">
                                    <h4 className="subtitle center">Not Attending</h4>
                                    <ul className="collection">
                                        {this.state.notAttending.length ? (
                                            <List>
                                                {this.state.notAttending.map(notAttending => (
                                                    <li className="collection-item" key={notAttending._id}>{notAttending.name}</li>
                                                ))}
                                            </List>
                                        ) : (<h2 className="text-center">{this.state.message}</h2>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        )
                    }
                };
                
export default RSVPs;