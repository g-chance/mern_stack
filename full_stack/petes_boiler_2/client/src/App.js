import React from 'react';
import './App.css';
import New from './components/New';
import { Router, Link } from '@reach/router'
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className="App">
      <h1>Header</h1>
      <Link to="/new">Add a new Task</Link>

      <Router>
        <Dashboard path="/" />
        <New path="/new" />
      </Router>
    </div>
  );
}

export default App;
