import React, { Component } from 'react';
import './App.css';

import { connect } from "react-redux";

import Header from './components/Header';
import PrestationList from './components/PrestationList';
import AdressReservationPage from "./components/AdressReservationPage";
import DateReservationPage from "./components/DateReservationPage";
import ConfirmationReservationPage from "./components/ConfirmationReservationPage";

import logo from './logo_wecasa.png';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Header logosrc={logo}/>
          <Route exact path="/" component={PrestationList}/>
          <Route path="/adress-reservation" component={AdressReservationPage} />
          <Route path="/date-reservation" component={DateReservationPage} />
          <Route path="/confirmation-reservation" component={ConfirmationReservationPage} />
        </div>
      </Router>
    );
  };
};

export default App;


