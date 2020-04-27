import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Imports From James for Redux/PrivateRouting
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './components/store//reducers';


const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
