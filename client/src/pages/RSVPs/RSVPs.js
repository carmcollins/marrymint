import React from "react";
import Heading from "../../components/Heading";
import API from "../../utils/API";

class RSVPs extends Component {


    state = {
        name: "",
        id: "",
        invited: [],
        attending: [],
        notAttending: []
    };

    componentDidMount() {
        //set id state to logged in user
        this.setState({ id: req.user._id})
        this.getRSVPS(this.state.id)
    };

    getRSVPS = (id) => {
        API.getRSVPS(id)
            .then(res => {
                for (let i = 0; i < res.RSVPS.length; i++) {
                    if (res.RSVPS[i].invited && !res.RSVPS[i].attending && !res.RSVPS[i].notAttending) {
                        this.setState({ invited: this.state.invited.push(res.RSVPS[i]) })
                    } 
                    else if (res.RSVPS[i].invited && res.RSVPS[i].attending && !res.RSVPS[i].notAttending) {
                        this.setState({ attending: this.state.attending.push(res.RSVPS[i]) })
                    }
                    else if (res.RSVPS[i].invited && !res.RSVPS[i].attending && res.RSVPS[i].notAttending) {
                        this.setState({ notAttending: this.state.notAttending.push(res.RSVPS[i]) })
                    }

     } }) .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name) {
            API.addRSVP({
                name: this.state.name
            })
                .catch(err => console.log(err.response));
        }

        //Clears form
        this.setState({
            name: ""
        });
    };

    handleAttend = event => {
        event.preventDefault();
        API.updateRSVPAttend()
    }


//handleNotAttend


    render() {
        return (   
    <div>
    <Heading title="RSVPs" subtitle="Input all of your wedding guests' names into our database, and easily track their attendance as your invite responses come in." />
    <div className="container">
        <div className="row">
            <div className="col s12 m12 l12">
                <div id="signup-form" className="row">
                    <form className="col s12">
                        <div className="form-div">
                            <h4 className="red-text text-accent-1">Add Guests Here</h4>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="guest-name" type="text" className="validate" name="guestName" value={this.state.name}
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
            </div>
        </div>
        <div className="row">
            <div className="col s12 m12 l4">
                <h4 className="subtitle center">Invited</h4>
                <ul className="collection">
                {this.state.invited.length ? (
                        <List>
                            {this.state.invited.map(invited => (
                    <li className="collection-item">
                        <div>{invited.name}
                                <a  href="" className="secondary-content rsvp-no" onClick={this.handleNoAttend}><i className="material-icons">clear</i></a>
                            <a href="" className="secondary-content rsvp-yes"><i className="material-icons" onClick={this.handleAttend(invited._id)}>done</i></a>
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
                    <li className="collection-item">{attending.name}</li>
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
                    <li className="collection-item">{notAttending.name}</li>
                ))}
                        </List>
                    ) : (<h2 className="text-center">{this.state.message}</h2>)}
                </ul>
            </div>
        </div>
    </div>
</div >
         )} };

export default RSVPs;