import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'



//Components
import Navbar from './NavBar/Navbar.js'
import Home from './Home/Home'
import SearchStudents from './Search/SearchStudents'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchStudents} />
      </BrowserRouter>
    </div>
  );
}

export default App;
