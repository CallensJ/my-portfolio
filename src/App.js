import React from "react";    
import './App.scss';
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Curiculum from "./components/curiculum/Curiculum";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Curiculum" element={<Curiculum />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
