import React from 'react';
import { Router } from '@reach/router'
import './App.css';
import Main from './views/Main';
import NewProject from './views/NewProject';

function App() {
  return (
    <div className="App wrapper">
      <h1 style={{backgroundColor:'grey', margin: '2px 10px', padding: '5px 0', border: '1px solid black'}}>Project Manager</h1>
      <Router>
        <Main path='/'></Main>
        <NewProject path='/projects/new'></NewProject>
      </Router>
    </div>
  );
}

export default App;
