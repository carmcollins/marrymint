import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Header from "./components/Header";
import ToDos from "./pages/ToDos";
import FindVendors from "./pages/FindVendors";
import Vendors from "./pages/Vendors";
import RSVPs from "./pages/RSVPs";

const App = () => (
  <Router>
    <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Header} />
        <Route exact path="/to-do-list" component={ToDos} />
        <Route exact path="/find-vendors" component={FindVendors} />
        <Route exact path="/vendors" component={Vendors} />
        <Route exact path="/rsvp" component={RSVPs} />
    </div>
  </Router>
);

export default App;
