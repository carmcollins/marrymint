import React from "react";
import Heading from "../../components/Heading";

const RSVPs = () =>
    <div>
        <Heading title="RSVPs" subtitle="Input all of your wedding guests' names into our database, and easily track their attendance as your invite responses come in." />
        <div className="container">
            <div className="row">
                <div className="col s12 m12 l4">
                    <h4 className="subtitle center">Invited</h4>
                    <ul className="collection">
                        <li className="collection-item">
                            <div>Carmen Collins
                                <a href="" className="secondary-content rsvp-no"><i className="material-icons">clear</i></a>
                                <a href="" className="secondary-content rsvp-yes"><i className="material-icons">done</i></a>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div>Jenni Bazelak
                                <a href="" className="secondary-content rsvp-no"><i className="material-icons">clear</i></a>
                                <a href="" className="secondary-content rsvp-yes"><i className="material-icons">done</i></a>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div>Melissa Womack
                                <a href="" className="secondary-content rsvp-no"><i className="material-icons">clear</i></a>
                                <a href="" className="secondary-content rsvp-yes"><i className="material-icons">done</i></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col s12 m6 l4">
                    <h4 className="subtitle center">Attending</h4>
                    <ul className="collection">
                        <li className="collection-item">Carmen Collins</li>
                        <li className="collection-item">Jenni Bazelak</li>
                    </ul>
                </div>
                <div className="col s12 m6 l4">
                    <h4 className="subtitle center">Not Attending</h4>
                    <ul className="collection">
                        <li className="collection-item">Melissa Womack</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
;

export default RSVPs;