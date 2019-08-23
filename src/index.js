import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import {createStore, combineReducers } from "redux";

import {prestationsReducer} from './reducers/prestationsReducer';

const store = createStore(combineReducers({prestations: prestationsReducer}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//to use store with navigator console
window.store = store;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


