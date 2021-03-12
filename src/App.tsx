import React from "react";
import Pokedex from "./components/Pokedex";
import { ContextsProvider } from "./contexts/PokeContext";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div>
      <ContextsProvider>
        <Pokedex />
      </ContextsProvider>
    </div>
  );
}

export default App;
