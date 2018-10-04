import React, { Component } from "react";
import Heading from "../../components/Heading";
import "./FindVendors.css";
import Card from "../../components/Card"
import API from "../../utils/API";


class FindVendors extends Component {

    state = {
        vendors: [],
        name: "",
        category: "",
        link: "",
        photo: "",
        description: ""
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
        API.getVendorByCategory(category)
            .then(res => {
                this.setState({ vendors: res.data })
            })
            .catch(err => console.log(err));
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
                        <a href="/find-vendors" className="btn-small filter-btn red accent-1" onClick={() => this.handleAllButton()}>All</a>

                        <a href="/find-vendors/planners" className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("planners")}>Planners</a>
                        <a href="/find-vendors/photographers" className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("photographers")}>Photographers</a>
                        <a href="/find-vendors/florists" className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("florists")}>Florists</a>
                        <a href="/find-vendors/rentals" className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("rentals")}>Rentals</a>
                        <a href="/find-vendors/venues" className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("venues")}>Venues</a>
                        <a href="/find-vendors/caterers" className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("caterers")}>Caterers</a>
                        <a href="/find-vendors/bakers" className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("bakers")}>Bakers</a>
                        <a href="/find-vendors/stationery" className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("stationery")}>Stationery</a>
                        <a href="/find-vendors/videographers" className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("videographers")}>Videographers</a>
                        <a href="/find-vendors/beauty" className="btn-small filter-btn red accent-1" onClick={() => this.handleFilterButton("beauty")}>Beauty</a>

                    </div>
                    <div className="row">

                        {/* start here */}
                        <Card>
                            {this.state.vendors.map(vendors => (
                                <div className="col s12 m4" key={vendors._id}>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={vendors.photo} alt="marrymint vendor" />
                                            <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal lighten-3" onClick={() => this.handleAddButton(vendors._id)}><i className="material-icons">add</i></a>
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


                        {/* ends here */}

                    </div>
                </div>
            </div>
        )
    }

};

export default FindVendors;