import React, { Component } from 'react';
import './App.css';

import Header from './components/functionalComponent/Header';
import PrestationListPage from './containers/PrestationListPage';
import AddressReservationPage from "./containers/AddressReservationPage";
import DateReservationPage from "./containers/DateReservationPage";
import ConfirmationReservationPage from "./containers/ConfirmationReservationPage";

import logo from './logo_wecasa.png';

import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

class App extends Component {

  redirectPage = (url) => {
    switch(url){
      
      case '/address-reservation':
        if (localStorage.articles.split('').length === 0){
          return <Redirect to="/" />;
        }
        break;
      case '/date-reservation':
        if (localStorage.articles.split('').length === 0){
          return <Redirect to="/" />;
        } else if (localStorage.address === ""){
          return <Redirect to='/address-reservation' />;
        }
        break;
      default:
        return;
    }
  }

  render(){
    let url = window.location.pathname;
    return (
      <Router>
        <div className="App">
          <Header logosrc={logo}/>
          <div className="container">
            <Route exact path="/" component={PrestationListPage}/>
            <Route path="/address-reservation" component={AddressReservationPage} />
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


