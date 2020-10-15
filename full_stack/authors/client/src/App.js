import React from 'react';
import { Router } from '@reach/router';
import Nav from './components/Nav';
import Main from './views/Main';
import AddAuthor from './views/AddAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <div className='wrapper'>
      <Nav></Nav>
      <Router>
        <Main path='/'></Main>
        <AddAuthor path='/authors/new'></AddAuthor>
        <EditAuthor path='/authors/edit/:id'></EditAuthor>
      </Router>
    </div>
  );
}

export default App;
