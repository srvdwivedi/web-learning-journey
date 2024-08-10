import './App.css';
import React from 'react';

import PrintName from './Components/PrintName';
import Gallary from './Components/Profile/ReactDoc_1.1';
import StopWatch from './Components/ReactDocEscapeHatches/Refs'
import { ListProvider } from './context/ListContext';
import ItemList from './Components/List/ItemList';
import PokemonListing from './Components/Monster-website/PokemonListing';
import { PokemonProvider } from './context/PokemonContext/PokemonContext';

function App() {
  return (
    <React.StrictMode>
      <ListProvider>
        <PokemonProvider>
          <div className="App">
            {/* <ItemList /> */}
            <PokemonListing />
            {/* <PrintName /> */}
            {/* <Monsters />  */}
            {/* <Gallary /> */}
            {/* <StopWatch /> */}
          </div>
        </PokemonProvider>
      </ListProvider>
    </React.StrictMode>
  );
}

export default App; 
