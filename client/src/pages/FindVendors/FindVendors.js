import React from "react";
import Heading from "../../components/Heading";

const FindVendors = () =>
    <div>
        <Heading bg="findVendorsHead" title="Find Vendors" subtitle="We've hand-selected all of our favorite vendors in town to ensure that you'll have the best team working with you on your wedding day." />
        <div className="container">
            <h4 className="subtitle center">Find Vendors</h4>
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
                        <div className="card-action">
                            <a href="">Add To List</a>
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
                        <div className="card-action">
                            <a href="">Add To List</a>
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
                        <div className="card-action">
                            <a href="">Add To List</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
;

export default FindVendors;