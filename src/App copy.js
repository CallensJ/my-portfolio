import React from "react";    
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Curiculum from "./components/curiculum/Curiculum";
import Projects from "./components/projects/Projects";

function App(props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Curiculum" element={<Curiculum />} />
        <Route path="/Projects" element={<Projects />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Link to="/"> Home </Link>
        <Link to="About" className="about">About </Link>
        <Link to="Curiculum">Curiculum</Link>
        <Link to="Projects">Projects</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
