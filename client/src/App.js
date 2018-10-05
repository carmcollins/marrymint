import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ToDos from "./pages/ToDos";
import RSVPs from "./pages/RSVPs";
import Vendors from "./pages/Vendors";
import FindVendors from "./pages/FindVendors";
import NotFound from "./pages/NotFound";
import API from "./utils/API"

class App extends Component {

  state = {
    isLoggedIn: false
  };

  markLoggedIn = () => {
    this.setState({isLoggedIn: true})
  };

  markLoggedOut = () => {
    this.setState({isLoggedIn: false})
  };

  componentDidMount(){
    API.setLoginFn(this.markLoggedIn);

    API.setLogoutFn(this.markLoggedOut);

    var JWT = window.localStorage.getItem("JWT");

    if(JWT){
      API.setJWT(JWT);
    };
  };

  render() {
    return (
      <Router>
        <div>
            <Nav isLoggedIn={this.state.isLoggedIn}/>
            {!this.state.isLoggedIn ? (
              <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
              </Switch>
            ) : (
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/to-do-list" component={ToDos} />
                <Route exact path="/find-vendors" component={FindVendors} />
                <Route exact path="/vendors" component={Vendors} />
                <Route exact path="/rsvp" component={RSVPs} />
                <Route component={NotFound} />
              </Switch>
            )}
        </div>
      </Router>
    );
  };
};

export default App;