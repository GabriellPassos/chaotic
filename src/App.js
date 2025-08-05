import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { TemplatePage } from "./pages/TemplatePage";
import { Equipment } from "./pages/Equipment";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TemplatePage>
          <Equipment/>
        </TemplatePage>
      </BrowserRouter>
    </div>
  );
}

export default App;
