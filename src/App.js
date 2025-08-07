import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { TemplatePage } from "./pages/TemplatePage";
import { Equipment } from "./pages/Equipment";
import { Content } from "./pages/Content.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/chaotic">
        <TemplatePage>
          <Content />
        </TemplatePage>
      </BrowserRouter>
    </div>
  );
}

export default App;
