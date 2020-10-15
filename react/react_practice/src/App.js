import React, { useState } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar';
import MyContext from './context/MyContext';
import SearchResults from './components/SearchResults';

function App() {

  const [state, setState] = useState(
    {
      'text': "",
      'pokemon': [],
      'pokeinfo': [],
      'forms': {},
      'favorites': []
    }
  )

  return (
    <div>
      <MyContext.Provider value={{state, setState}}>
        <NavBar></NavBar>
        <Wrapper>
          {/* Search Results */}
          {/* Pokeinfo */}
        </Wrapper>
      </MyContext.Provider>
    </div>
  );
}

export default App;
