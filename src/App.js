import React, { Component } from 'react';
import './App.css';

import Header from './components/functionalComponent/Header';
import PrestationListPage from './containers/PrestationListPage';
import AddressReservationPage from "./containers/AddressReservationPage";
import DateReservationPage from "./containers/DateReservationPage";
import ConfirmationReservationPage from "./containers/ConfirmationReservationPage";
import PageNotFound from "./containers/PageNotFound";

import logo from './logo_wecasa.png';

import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

class App extends Component {

  getRouteCondition = (url) => {
    let articles;
    if(typeof(articles) === "string"){
      articles = JSON.parse(localStorage.articles);
    } else {
      articles = localStorage.articles;
    }
    console.log('articles',articles);
    switch(url){
      case '/':
        return <Route path="/" component={PrestationListPage} />
      case '/address-reservation':
        if (articles.length === 0){
          return <Redirect to="/" />;
        } else {
          return <Route path={url} component={AddressReservationPage} />
        }
      case '/date-reservation':
        if (articles.length === 0){
          return <Redirect to="/" />;
        } else if (localStorage.address === ""){
          return <Redirect to='/address-reservation' />;
        } else {
          return <Route path={url} component={DateReservationPage} />
        }
      case '/confirmation-reservation':
        return <Route path={url} component={ConfirmationReservationPage} />
      default:
        return <Route path={url} component={PageNotFound} />;
    }
  }

  render(){
    let url = window.location.pathname;
    return (
      <Router>
        <div className="App">
          <Header logosrc={logo}/>
          <div className="container">
            {/*step data must be completed to go to the next step*/}
            {this.getRouteCondition(url)}
            </div>
        </div>
      </Router>
    );
  };
};

export default App;


