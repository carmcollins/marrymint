import React from "react";
import Heading from "../../components/Heading";

const Vendors = () =>
    <div>
        <Heading bg="vendorsHead" title="Vendors" subtitle="Browse through Marrymint's curated list of trustworthy vendors and put together the dream team to help you design your big day." />
        <div className="container">
            <h4 className="subtitle center">No Vendors Saved Yet</h4>
            <h4 className="subtitle center">Your Vendors</h4>
            <div className="row">
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image">
                            <img src="http://www.placehold.it/200x200" alt="marrymint vendor" />
                        </div>
                        <div className="card-content">
                            <span className="card-title">Vendor Name</span>
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
                        </div>
                        <div className="card-content">
                            <span className="card-title">Vendor Name</span>
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
                        </div>
                        <div className="card-content">
                            <span className="card-title">Vendor Name</span>
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

export default Vendors;