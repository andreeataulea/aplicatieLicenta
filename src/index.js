import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import  registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import rootReducer from './Components/rootReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userLoggedIn } from "./Actions/auth.js";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <BrowserRouter>
       <Provider store={store}> 
       <App /></Provider> 
    </BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();