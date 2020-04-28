import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpPage from './components/SignUpPage.js'
import Header from './components/Header.js'


function App() {
  return (
    <div>
        <Header />
      <div>
        <SignUpPage />
      </div>
    </div>
  );
}

export default App;
