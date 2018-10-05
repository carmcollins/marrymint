import React, { Component } from "react";
import "./NotFound.css";

class NotFound extends Component {
    render() {
        return (
            <div className="not-found-bg">
                <div className="row">
                    <div className="col s12">
                        <h1 className="not-found-title">404 Page Not Found</h1>
                    </div>
                </div>
            </div>
        );
    };
};

export default NotFound;