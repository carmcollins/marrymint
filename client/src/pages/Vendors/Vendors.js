import React, { Component } from "react";
import Heading from "../../components/Heading";
import Card from "../../components/Card"
import API from "../../utils/API";

class Vendors extends Component {

    state = {
        vendors: [],
        name: "",
        category: "",
        link: "",
        photo: "",
        description: ""
    };

    componentDidMount() {
        this.getUsersVendors();
    };

    getUsersVendors = () => {
        API.getUsersVendors().then(res => {
            this.setState({ vendors: res.data[0].vendors });
        }).catch(err => console.log(err));
    };

    handleDeleteButton = (vendorsid) => {
        API.deleteVendor(vendorsid).then(() => {
            this.getUsersVendors();
        });
    };

    render() {
        return (   
            <div>
                <Heading bg="vendorsHead" title="Vendors" subtitle="Browse through Marrymint's curated list of trustworthy vendors and put together the dream team to help you design your big day." />
                <div className="container">
                    <h4 className="subtitle center">Your Vendors</h4>
                    <div className="row">
                        {this.state.vendors.length > 0 ? (
                            <Card>
                            {this.state.vendors.map(vendors => (
                                <div className="col s12 m4">
                                    <div className="card" key={vendors._id}>
                                        <div className="card-image">
                                            <img src={vendors.photo} alt="marrymint vendor" />
                                            <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal lighten-3" onClick={() => this.handleDeleteButton(vendors._id)}><i className="material-icons">close</i></a>
                                        </div>
                                        <div className="card-content">
                                            <p className="card-title red-text text-accent-1">{vendors.name}</p>
                                            <p>{vendors.description}</p>
                                        </div>
                                        <div className="card-action">
                                            <a href={vendors.link} target="blank">Visit Website</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </Card>
                        ) : (<h4 className="subtitle center red-text text-accent-1">No Vendors Saved Yet</h4>)}
                    </div>
                </div>
            </div>
        );
    };
};

export default Vendors;

