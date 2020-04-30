
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

//components
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import ContributerUserProfile from './components/ContributerUserProfile';
import Searcher from './components/Searcher';
// import ViewerUserProfile from './components/ViewerUserProfile';
import SavedGuides from './components/SavedGuides'
import EditHowTo from './components/EditHowTo';
//privateroute import
import PrivateRoute from './utils/PrivateRoute';
import { axiosWithAuth } from './utils/axiosWithAuth';

//pulled from spencers
import Footer from './components/Footer.js'
import HomePage from './components/HomePage.js'
import GuideCreator from './components/GuideCreator'
import styled from 'styled-components'

const PageHeader = styled.div `
    width: 100%; 
    margin:0%;
    padding: 1em;
    background-color: #e8e2db;
    color: black;
    display:flex;

    
`

const Nav = styled.div`
display:flex;
justify-content:flex-end;
`

const ImgBox = styled.img`
display:inline;
`

const PageLinks = styled.a `
padding-left:15px;
padding-right:15px;
text-align:right;
display:inline;
`

const Button = styled.div`
background-color:#e8e2db;
color:black;

`







function App() {

//   const [savedList, setSavedList] = useState([]
    
//     );
//     const addToSavedList = guide => {
//       setSavedList([...savedList, guide])
// }
  return (


    <div >
      <PageHeader>
          <ImgBox src ='https://dewey.tailorbrands.com/production/brand_version_mockup_image/524/2930508524_fcc14525-464e-4936-a671-881feb13ce35.png?cb=1588276312'/>
    <Switch>
    <div className="App">
       <PageHeader>
    {/* <Switch> */}

    {/* <PageHeader> */}
    <Route exact path='/login' component={Login}/>
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
              <Nav> 
              <PageLinks>

    {/* </Switch> */}
   
               <PageLinks>

                    <Link to ='/'>
                        <Button>Home</Button>
                    </Link>
                </PageLinks>

                <PageLinks>
                    <Link to ='/login'>
                    <Button>Account</Button>
                    </Link>
                </PageLinks>

                {/* <PageLinks> */}
                    <Link to ='/signup'>
                        <Button>Sign Up</Button>
                    </Link>
                    
                    <Link to ='/search'>
                        <button>Search</button>
                    </Link>
                    <Route path='/search' component={Searcher}/>
                    
                {/* </PageLinks> */}

                {/* <PageLinks> */}
                {/* <Link to ='/GuideCreator' component={GuideCreator}>
                    <button>Create Guide</button>
                  </Link> */}
                {/* </PageLinks> */}
                </Nav>

                </PageHeader> 
                <Route exact path ='/'>
                    <HomePage />
                </Route>          

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
