import React from 'react';
import './App.css';
import SignUpPage from './components/SignUpPage.js'
import Footer from './components/Footer.js'
import HomePage from './components/HomePage.js'
import GuideCreator from './components/GuideCreator.js'
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
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
  return (
  <Router>
            <PageHeader>
                <span>
                    How To Do Anything
                </span>

                <PageLinks>
                    <Link to ='/'>
                        <button>Home</button>
                    </Link>
                </PageLinks>

                <PageLinks>
                    <Link to ='/Account'>
                    <button>Account</button>
                    </Link>
                </PageLinks>

                <PageLinks>
                    <Link to ='/SignUpPage'>
                        <button>Sign Up</button>
                    </Link>
                </PageLinks>

                <PageLinks>
                  <Link to ='/GuideCreator'>
                    <button>Create Guide</button>
                  </Link>
                </PageLinks>

                <Route exact path ='/'>
                    <HomePage />
                </Route>
            </PageHeader>

            <div>
              <Route exact path ='/SignUpPage'>
                <SignUpPage />
              </Route>
            </div>

            <div>
              <Route exact path ='/GuideCreator'>
                <GuideCreator />
              </Route>
            </div>
          
        

            <div>
              <Footer />
            </div>
  </Router>
  );
}

export default App;
