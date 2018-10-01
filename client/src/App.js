import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ToDos from "./pages/ToDos";
import FindVendors from "./pages/FindVendors";
import Vendors from "./pages/Vendors";
import RSVPs from "./pages/RSVPs";

class App extends Component {
  state = {
    isLoggedIn: true
  }

  render() {
    return (
      <Router>
        <div>
            <Nav />
            {
              !this.state.isLoggedIn ? (
                [ // If user is not logged in, only allow them to see the / page
                  <Route exact path="/" component={Home} />
                ]
              ) : ( // If user is logged in, allow them to see all pages
                [<Route exact path="/" component={Home} />,
                <Route exact path="/to-do-list" component={ToDos} />,
                <Route exact path="/find-vendors" component={FindVendors} />,
                <Route exact path="/vendors" component={Vendors} />,
                <Route exact path="/rsvp" component={RSVPs} />]
              )
            }
        </div>
      </Router>
    );
  }
}

export default App;
