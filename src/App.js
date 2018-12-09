import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Location from './components/Location/Location';
import Menu from './components/Menu/Menu';
import Reservations from './components/Reservations/Reservations';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <div className="general-container">
            <Route exact path="/" component={Home} />
            <Route exact path="/location" component={Location} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/reservations" component={Reservations} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
