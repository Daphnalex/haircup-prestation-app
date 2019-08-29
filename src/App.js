import React, { Component } from 'react';
import './App.css';

import { connect } from "react-redux";

import Header from './components/functionalComponent/Header';
import PrestationListPage from './components/PrestationListPage';
import AdressReservationPage from "./components/AdressReservationPage";
import DateReservationPage from "./components/DateReservationPage";
import ConfirmationReservationPage from "./components/ConfirmationReservationPage";

import logo from './logo_wecasa.png';

import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

class App extends Component {

  constructor(props){
    super(props);
  }

  redirectPage = (url) => {
    console.log('type of',typeof(url));
    console.log("localStorage",localStorage)
    switch(url){
      
      case '/adress-reservation':
        console.log('url dans switch',localStorage.articles.split(''))
        if (localStorage.articles.split('').length === 0){
          console.log('ici');
          return <Redirect to="/" />;
        }
      case '/date-reservation':
        if (localStorage.articles.split('').length === 0){
          console.log('vient ici')
          return <Redirect to="/" />;
        } else if (localStorage.address === ""){
          console.log('plutôt là')
          return <Redirect to='/adress-reservation' />;
        }
      default:
        return;
    }
  }

  render(){
    let url = window.location.pathname;
    console.log('url',url);
    return (
      <Router>
        <div className="App">
          <Header logosrc={logo}/>
          <div className="container">
            <Route exact path="/" component={PrestationListPage}/>
            <Route path="/adress-reservation" component={AdressReservationPage} />
            <Route path="/date-reservation" component={DateReservationPage} />
            <Route path="/confirmation-reservation" component={ConfirmationReservationPage} />
            {this.redirectPage(url)}
          </div>
        </div>
      </Router>
    );
  };
};

export default App;


