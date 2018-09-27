import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import ToDos from "./pages/ToDos";
import Timeline from "./pages/Timeline";
import FindVendors from "./pages/FindVendors";
import Vendors from "./pages/Vendors";
import Budget from "./pages/Budget";
import RSVPs from "./pages/RSVPs";

const App = () => (
  <Router>
    <div>
        <Nav />
        <Route exact path="/" component={Header} />
        <Route exact path="/to-do-list" component={ToDos} />
        <Route exact path="/timeline" component={Timeline} />
        <Route exact path="/find-vendors" component={FindVendors} />
        <Route exact path="/vendors" component={Vendors} />
        <Route exact path="/budget" component={Budget} />
        <Route exact path="/rsvp" component={RSVPs} />
    </div>
  </Router>
);

export default App;
