import React from "react";
import Pokedex from "./pages/Pokedex";
import { ContextsProvider } from "./contexts/PokeContext";
// import logo from './logo.svg';
// import './styles/gobal.css';

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
