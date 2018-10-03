import React from "react";
import Heading from "../../components/Heading";
import "./FindVendors.css";

const FindVendors = () =>
    <div>
        <Heading bg="findVendorsHead" title="Find Vendors" subtitle="We've hand-selected all of our favorite vendors in town to ensure that you'll have the best team working with you on your wedding day." />
        <div className="container">
            <h4 className="subtitle center">Find Vendors</h4>
            <div className="filter-btns">
                <a href="/find-vendors" class="btn-small filter-btn red accent-1">All</a>
                <a href="/find-vendors/planners" class="btn-small filter-btn red accent-1">Planners</a>
                <a href="/find-vendors/photographers" class="btn-small filter-btn red accent-1">Photographers</a>
                <a href="/find-vendors/florists" class="btn-small filter-btn red accent-1">Florists</a>
                <a href="/find-vendors/rentals" class="btn-small filter-btn red accent-1">Rentals</a>
                <a href="/find-vendors/venues" class="btn-small filter-btn red accent-1">Venues</a>
                <a href="/find-vendors/caterers" class="btn-small filter-btn red accent-1">Caterers</a>
                <a href="/find-vendors/bakers" class="btn-small filter-btn red accent-1">Bakers</a>
                <a href="/find-vendors/stationery" class="btn-small filter-btn red accent-1">Stationery</a>
                <a href="/find-vendors/videographers" class="btn-small filter-btn red accent-1">Videographers</a>
                <a href="/find-vendors/beauty" class="btn-small filter-btn red accent-1">Beauty</a>
            </div>
            <div className="row">
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image">
                            <img src="http://www.placehold.it/200x200" alt="marrymint vendor" />
                            <a class="btn-floating btn-large halfway-fab waves-effect waves-light teal lighten-3"><i class="material-icons">add</i></a>
                        </div>
                        <div className="card-content">
                            <p className="card-title red-text text-accent-1">Vendor Name</p>
                            <p>This is where the vendor's description will go.</p>
                        </div>
                        <div className="card-action">
                            <a href="">Visit Website</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image">
                            <img src="http://www.placehold.it/200x200" alt="marrymint vendor" />
                            <a class="btn-floating btn-large halfway-fab waves-effect waves-light teal lighten-3"><i class="material-icons">add</i></a>
                        </div>
                        <div className="card-content">
                            <p className="card-title red-text text-accent-1">Vendor Name</p>
                            <p>This is where the vendor's description will go.</p>
                        </div>
                        <div className="card-action">
                            <a href="">Visit Website</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image">
                            <img src="http://www.placehold.it/200x200" alt="marrymint vendor" />
                            <a class="btn-floating btn-large halfway-fab waves-effect waves-light teal lighten-3"><i class="material-icons">add</i></a>
                        </div>
                        <div className="card-content">
                            <p className="card-title red-text text-accent-1">Vendor Name</p>
                            <p>This is where the vendor's description will go.</p>
                        </div>
                        <div className="card-action">
                            <a href="">Visit Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
;

export default FindVendors;