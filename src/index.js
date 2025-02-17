import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from "react-redux";

import configureStore from "./store/configureStore";

const store = configureStore();

//to use store with navigator console
window.store = store;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


