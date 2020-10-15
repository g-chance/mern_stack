import React from 'react';
import { Router } from '@reach/router'
import './App.css';
import Home from './components/Home';
import Adv from './components/Adv'
import Word from './components/Word'
import Index from './components/Index'

function App() {
  return (
    <div className="wrapper">
      <Index></Index>
      <Router>
        {/* <Home path='/home'></Home>
        <Word path='/:id'></Word>
        <Adv path='/:word/:color/:bgColor' ></Adv> */}
      </Router>
    </div>
  );
}

export default App;
