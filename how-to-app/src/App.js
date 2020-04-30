import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

//components
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import ContributerUserProfile from './components/ContributerUserProfile';
// import ViewerUserProfile from './components/ViewerUserProfile';
import SavedGuides from './components/SavedGuides'
import EditHowTo from './components/EditHowTo';
//privateroute import
import PrivateRoute from './utils/PrivateRoute';
import { axiosWithAuth } from './utils/axiosWithAuth';

function App() {

  



//   const [savedList, setSavedList] = useState([]
    
//     );
//     const addToSavedList = guide => {
//       setSavedList([...savedList, guide])
// }

  return (
    <div className="App">
    <Switch>
    
    <Route path='/login' component={Login}/>
    <Route path='/signup' component={Signup}/>

    {/* Private Routes */}
    {/* route to the view/save howTo page */}
    {/* <PrivateRoute path='/user-view-dashboard' component={ViewerUserProfile}/>  */}
    {/* route to the contributor/create New howto Page */}
    <PrivateRoute path='/user' component={ContributerUserProfile}/>
    <PrivateRoute path='/update-howto/:id' component={EditHowTo}/>
    {/* <SavedGuides list={savedList} />
    <PrivateRoute path='/saved-guides/:id'>
    <ContributerUserProfile />
    </PrivateRoute> */}
    </Switch>
      
    </div>
  );
}

export default App;
