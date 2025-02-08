import React from "react";
import "./App.css";
import Navs from "./navs.tsx";
import { StatesProvider } from "./context";
function App() {
  return (
    <StatesProvider>
      <Navs />
    </StatesProvider>
  );
}

export default App;
