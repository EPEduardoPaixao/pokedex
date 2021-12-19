import React from "react";
import Pokedex from "./pages/Pokedex";
import { ContextsProvider } from "./contexts/PokeContext";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {

  const queryClient = new QueryClient()
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ContextsProvider>
          <Pokedex />
        </ContextsProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
