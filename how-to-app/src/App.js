import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";

//components
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import ContributerUserProfile from "./components/ContributerUserProfile";
import Searcher from "./components/Searcher";
// import ViewerUserProfile from './components/ViewerUserProfile';
import SavedGuides from "./components/SavedGuides";
import EditHowTo from "./components/EditHowTo";
//privateroute import
import PrivateRoute from "./utils/PrivateRoute";
import { axiosWithAuth } from "./utils/axiosWithAuth";

//pulled from spencers
import Footer from "./components/Footer.js";
import HomePage from "./components/HomePage.js";
import GuideCreator from "./components/GuideCreator";
import styled from "styled-components";

const PageHeader = styled.div`
  width: 100%;
  margin: 0%;
  padding: 1em;
  background-color: #e8e2db;
  color: black;
  display: flex;
`;

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ImgBox = styled.img`
  display: inline;
`;

const PageLinks = styled.a`
  padding-left: 15px;
  padding-right: 15px;
  text-align: right;
  display: inline;
`;

const Button = styled.div`
  background-color: #e8e2db;
  color: black;
`;

const fixedHeader = styled.div`
  display: flex;
  justify-content: space evenly;
  align-items: center;
`;

function App() {
  //   const [savedList, setSavedList] = useState([]

  //     );
  //     const addToSavedList = guide => {
  //       setSavedList([...savedList, guide])
  // }

  return (
    <div>
      <div>
        <ImgBox src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/524/2930508524_fcc14525-464e-4936-a671-881feb13ce35.png?cb=1588276312" />
        <PageLinks>
          <Link to="/">
            <button>Home</button>
          </Link>
        </PageLinks>

        <PageLinks>
          <Link to="/login">
            <button>Account</button>
          </Link>
        </PageLinks>

        <PageLinks>
          <Link to="/sign-up">
            <button>Sign Up</button>
          </Link>
        </PageLinks>

        <PageLinks>
          <Link to="/search">
            <button>Search</button>
          </Link>
        </PageLinks>
        <Route exact path="/">
          <HomePage />
        </Route>
      </div>

      <div className="App">
        <Switch>
          <Route exact path="/sign-up" component={Signup} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Searcher} />

          <PrivateRoute exact path="/user" component={ContributerUserProfile} />
          <PrivateRoute path='/update-howto/:id' component={EditHowTo}/>
        </Switch>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
