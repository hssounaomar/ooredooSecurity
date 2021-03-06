import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import reducers from "./reducers"; 
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import {getEquipements} from './actions/equipements.actions';
import {getSites} from './actions/sites.actions';
import {getSitesTypes} from './actions/siteTypes.actions';
const createStoreWithMiddleware = applyMiddleware(promise,thunk)(createStore);
const store=createStoreWithMiddleware(reducers);
store.dispatch(getEquipements());
store.dispatch(getSites());
store.dispatch(getSitesTypes())
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
