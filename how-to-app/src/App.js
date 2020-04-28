import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpPage from './components/SignUpPage.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'


function App() {
  return (
    <div>
        <Header />
      <div>
        <SignUpPage />
      </div>
        <Footer />
    </div>
  );
}

export default App;
