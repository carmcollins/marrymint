import React, { Component } from 'react';
import Nav from "./components/Nav";
import Header from "./components/Header";
import ToDos from "./pages/MyToDos";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <ToDos />
      </div>
    );
  }
}

export default App;
