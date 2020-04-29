import React from 'react';
import './App.css';
import SignUpPage from './components/SignUpPage.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomePage from './components/HomePage.js'
import GuideCreator from './components/GuideCreator.js'


function App() {
  return (
    <div>
        <Header />
      <div>
        <SignUpPage />
        <HomePage />
        <GuideCreator />
      </div>
        <Footer />
    </div>
  );
}

export default App;
