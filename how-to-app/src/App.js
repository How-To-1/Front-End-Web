
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

//pulled from spencers
import Footer from './components/Footer.js'
import HomePage from './components/HomePage.js'
import GuideCreator from './components/GuideCreator.js'
import styled from 'styled-components'

const PageHeader = styled.nav `
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 1em;
    margin-bottom: 2em;
    background-color: #e8e2db;
    color: black;
`
const PageLinks = styled.a `
padding-left:10px;
padding-right:10px;
`




function App() {

  



//   const [savedList, setSavedList] = useState([]
    
//     );
//     const addToSavedList = guide => {
//       setSavedList([...savedList, guide])
// }

  return (

    <div className="App">
    <Switch>
    {/* <PageHeader> */}
    <Route exact path='/login' component={Login}/>
    <Route path='/signup' component={Signup}/>

    {/* Private Routes */}
    {/* route to the view/save howTo page */}
    {/* <PrivateRoute path='/user-view-dashboard' component={ViewerUserProfile}/>  */}
    {/* route to the contributor/create New howto Page */}
    <PrivateRoute path='/user' component={ContributerUserProfile}/>
    <PrivateRoute path='/update-howto/:id' component={EditHowTo}/>
                <span>
                    How To Do Anything
                </span>

               
    
    
    {/* <SavedGuides list={savedList} />
    <PrivateRoute path='/saved-guides/:id'>
    <ContributerUserProfile />
    </PrivateRoute> */}
    </Switch>
    <PageLinks>
                    <Link to ='/'>
                        <button>Home</button>
                    </Link>
                </PageLinks>

                <PageLinks>
                    <Link to ='/login'>
                    <button>Account</button>
                    </Link>
                </PageLinks>

                {/* <PageLinks> */}
                    <Link to ='/signup'>
                        <button>Sign Up</button>
                    </Link>
                {/* </PageLinks> */}

                {/* <PageLinks> */}
                  <Link to ='/GuideCreator'>
                    <button>Create Guide</button>
                  </Link>
                {/* </PageLinks> */}

                <Route exact path ='/'>
                    <HomePage />
                </Route>
            {/* </PageHeader> */}

            

            {/* <div>
              <Route exact path ='/GuideCreator'>
                <GuideCreator />
              </Route>
            </div> */}
          
        

            <div>
              <Footer />
            </div>
      
    </div>

  );
}

export default App;
