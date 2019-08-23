import React, { Component } from 'react';
import './App.css';

import { connect } from "react-redux";

import Header from './components/Header';
import PrestationList from './components/PrestationList';

import logo from './logo_wecasa.png';


class App extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    /* get all haircut prestations */
    
  }

  render(){
    return (
      <div className="App">
        <Header logosrc={logo}/>
        <div className="container">
          <PrestationList/>
        </div>
      </div>
    );
  };
};


export default App;
