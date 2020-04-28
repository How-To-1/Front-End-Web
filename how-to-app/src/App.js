import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import AccountPage from './components/AccountPage/AccountPage.js'
import {BrowserRouter as Router} from 'react-router-dom'
import SignUpPage from './components/SignUpPage.js'

function App() {
  return (
    <Router>
    <div>
      <header>
        {/* <Header /> */}
      </header>

      <div>
        <SignUpPage />
        
        {/* <LandingPage />
        <AccountPage /> */}
      </div>
      
      <footer>
        <Footer />
      </footer>
    </div>
    </Router>

  );
}

export default App;
