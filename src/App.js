import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'



//Components
import Navbar from './NavBar/Navbar.js'
import Home from './Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
