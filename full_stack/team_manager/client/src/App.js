import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Nav from './components/Nav';
import AddPlayer from './views/AddPlayer';
import PlayerStatus from './views/PlayerStatus';

function App() {
  return (
    <div className='wrapper'>
      <Nav></Nav>
      <Router>
        <Main path='/players/list'></Main>
        <AddPlayer path='/players/new'></AddPlayer>
        <PlayerStatus path='/status/game/:id'></PlayerStatus>
      </Router>
    </div>
  );
}

export default App;
