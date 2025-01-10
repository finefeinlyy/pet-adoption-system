import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import RegisterAnimal from "./components/PetRegistration";
import RegisterAdopter from "./components/AdopterRegistration";
import AnimalDetails from "./components/AnimalDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register-animal" element={<RegisterAnimal />} />
        <Route path="/register-adopter" element={<RegisterAdopter />} />
        <Route path="/animal/:id" element={<AnimalDetails />} />
      </Routes>
    </Router>
  );
}

export default App;