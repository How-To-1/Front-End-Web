import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

//components
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import ContributerUserDashboard from './components/ContributerUserDashboard';
import ViewUserDashboard from './components/ViewUserDashboard';

//privateroute import
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/' componenent={Login}/>
    <Route path='/login' component={Login}/>
    <Route path='/signup' component={Signup}/>

    {/* Private Routes */}
    <PrivateRoute path='/user-view-dashboard' component={ViewUserDashboard}/>
    <PrivateRoute path='/user-contributor-dashboard' component={ContributerUserDashboard}/>
    

    </Switch>
      
    </div>
  );
}

export default App;
