import React, { Component } from "react";
import Heading from "../../components/Heading";
import "./FindVendors.css";
import Card from "../../components/Card"
import API from "../../utils/API";


class FindVendors extends Component {

    state = {
        vendors: [],
        filterVendor: []
    }

    componentDidMount() {
        this.getAllVendors();
    }
    //allVendors
    getAllVendors = () => {
        API.getVendors().then(res => {
            console.log(res.data);
            this.setState({ vendors: res.data });
        }).catch(err => console.log(err));
    };

    //handleAllButton
    handleAllButton = () => {
        this.getAllVendors();
    };

    //handleFilterButton
    handleFilterButton = (category) => {
        this.setState({ filterVendor: [] })
        const filter = this.state.vendors.filter(vendors => vendors.category === category);
        this.setState({ filterVendor: filter });

    };

    //handleAddButton
    handleAddButton = (vendorid) => {
        API.getVendorById(vendorid);
    }

    render() {

        return (
            <div>
                <Heading bg="findVendorsHead" title="Find Vendors" subtitle="We've hand-selected all of our favorite vendors in town to ensure that you'll have the best team working with you on your wedding day." />
                <div className="container">
                    <h4 className="subtitle center">Find Vendors</h4>
                    <div className="filter-btns">
                        <a className="btn-small filter-btn red accent-1" onClick={() => this.handleAllButton()}>All</a>

                        <a className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("Planner")}>Planners</a>
                        <a className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("Photographer")}>Photographers</a>
                        <a className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("Florist")}>Florists</a>
                        <a className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("Rental")}>Rentals</a>
                        <a className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("Venue")}>Venues</a>
                        <a className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("Caterer")}>Caterers</a>
                        <a className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("Baker")}>Bakers</a>
                        <a className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("Stationery")}>Stationery</a>
                        <a className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("Videographer")}>Videographers</a>
                        <a className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("Beauty")}>Beauty</a>

                    </div>
                    <div className="row">

                        {this.state.filterVendor.length > 0 ? (

                            <Card>
                                {this.state.filterVendor.map(vendors => (
                                    <div className="col s12 m4">
                                        <div className="card" key={vendors._id}>
                                            <div className="card-image">
                                                <img src={vendors.photo} alt="marrymint vendor" />
                                                <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal lighten-3" onClick={() => this.handleAddButton(vendors._id)}><i className="material-icons">add</i></a>
                                            </div>
                                            <div className="card-content">
                                                <p className="card-title red-text text-accent-1">{vendors.name}</p>
                                                <p>{vendors.description}</p>
                                            </div>
                                            <div className="card-action">
                                                <a href={vendors.link}>Visit Website</a>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </Card>
                        ) : (
                                <Card>
                                    {this.state.vendors.map(vendors => (
                                        <div className="col s12 m4">
                                            <div className="card" key={vendors._id}>
                                                <div className="card-image">
                                                    <img src={vendors.photo} alt="marrymint vendor" />
                                                    <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal lighten-3" onClick={() => this.handleAddButton(vendors._id)}><i className="material-icons">add</i></a>
                                                </div>
                                                <div className="card-content">
                                                    <p className="card-title red-text text-accent-1">{vendors.name}</p>
                                                    <p>{vendors.description}</p>
                                                </div>
                                                <div className="card-action">
                                                    <a href={vendors.link}>Visit Website</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Card>
                            )}

                    </div>
                </div>
            </div>
        )
    }

};

export default FindVendors;