import React, { Component } from 'react';
import './App.scss';

import { HashRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import LocationPage from './components/LocationPage/LocationPage';
import Menu from './components/Menu/Menu';
import Reservations from './components/Reservations/Reservations';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <NavBar />
          <div className="general-container">
            <Route exact path="/" component={Home} />
            <Route exact path="/location" component={LocationPage} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/reservations" component={Reservations} />
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
