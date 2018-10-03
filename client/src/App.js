import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ToDos from "./pages/ToDos";
import FindVendors from "./pages/FindVendors";
import Vendors from "./pages/Vendors";
import RSVPs from "./pages/RSVPs";
import NotFound from "./pages/NotFound";
import API from "./utils/API"

class App extends Component {
  state = {
    isLoggedIn: false
  }

  componentDidMount() { 
    API.setLoginFn(this.markLoggedIn)
    API.setLogoutFn(this.markLoggedOut)
  }

  markLoggedIn = () => {
    this.setState({isLoggedIn: true})
  }

  markLoggedOut = () => {
    this.setState({isLoggedIn: false})
  }

  render() {
    return (
      <Router>
        <div>
            <Nav isLoggedIn={this.state.isLoggedIn}/>
            {
              !this.state.isLoggedIn ? (
                // If user is not logged in, only allow them to see the / page
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route component={NotFound} />
                </Switch>
              ) : (
                // If user is logged in, allow them to see all pages
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/to-do-list" component={ToDos} />
                  <Route exact path="/find-vendors" component={FindVendors} />
                  <Route exact path="/vendors" component={Vendors} />
                  <Route exact path="/rsvp" component={RSVPs} />
                  <Route component={NotFound} />
                </Switch>
              )
            }
        </div>
      </Router>
    );
  }
}

export default App;
