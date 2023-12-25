import React, { useState } from "react";
import "./Projects.scss";
import Card from "./Card";
import Data from "../../Data";


const Projects = () => {
  const [item, setItems] = useState(Data);

  return (
    <>

      <section className="projects__section">
        <h2>Projects</h2>
        <div className="filters">
          <span className="filter__item">Frontend Mentor</span>
          <span className="filter__item">FreeCodeCamp</span>
          <span className="filter__item">Wordpress</span>
        </div>
        <div className="projects__container grid">
            <Card item={item} />
        </div>
      </section>
    </>
  );
};

export default Projects;
