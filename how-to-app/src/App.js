import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage/LandingPage.js'
import Header from '../Header.js'
import Footer from '../Footer.js'
import AccountPage from '../AccountPage'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <div>
        <LandingPage />
      </div>
      
      <footer>
        <Footer />
      </footer>
    </div>

  );
}

export default App;
