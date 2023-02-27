import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import APropos from "./Components/APropos";
import FicheLogement from "./Components/FicheLogement";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement" element={<FicheLogement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
