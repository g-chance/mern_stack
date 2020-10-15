import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/style.css'

import HelloWorld from './components/HelloWorld';
import PersonCard from './components/PersonCard2';
import PersCardFun from './components/persCardFun';
import HookForm from './components/HookForm';
import BoxGenerator from './components/BoxGenerator'
import BoxGen2 from './components/BoxGen2'
import Tabs from './components/Tabs'
import ToDoList from './components/ToDoList';
import Wrapper from './components/Wrapper'
import NavBar from './components/NavBar'
import FormWrapper from './components/FormWrapper'
import Pokemon from './components/Pokemon';
import PokemonAxios from './components/PokemonAxios'


function App() {
  return (
    <div className="App">
      <PokemonAxios></PokemonAxios>
      <Pokemon></Pokemon>
      <Wrapper>
        <NavBar></NavBar>
        <FormWrapper></FormWrapper>
      </Wrapper>
      <ToDoList></ToDoList>
      <Tabs tabinfo={[
        {'label': 'tab1', 'content': 'this is tab 1' },
        {'label': 'tab2', 'content': 'this is tab 2' },
        {'label': 'tab3', 'content': 'this is tab 3' },
      ]} />
      <BoxGen2></BoxGen2>
      {/* <BoxGenerator></BoxGenerator> */}
      <HelloWorld />
      <PersonCard firstName='john' lastName='legend' age={20} hairColor='brown'>
        <p>Test</p>
        <p>Baluga Whale</p>
      </PersonCard>
      <PersCardFun firstName='greg' lastName='mage' age={36} hairColor='black' />
      <HookForm></HookForm>

    </div>
  );
}

export default App;