import './App.css';
import React from 'react';

import PrintName from './Components/PrintName';
import Monsters from './Components/Monster-website';
import Gallary from './Components/Profile/ReactDoc_1.1';
import StopWatch from './Components/ReactDocEscapeHatches/Refs'
import { ListProvider } from './context/ListContext';
import ItemList from './Components/List/ItemList';

function App() {
  return (
    <React.StrictMode>
    <ListProvider>
      <div className="App">
        <ItemList />
        {/* <PrintName /> */}
        {/* <Monsters />  */}
        {/* <Gallary /> */}
        {/* <StopWatch /> */}
      </div>
    </ListProvider>
    </React.StrictMode>
  );
}

export default App; 
