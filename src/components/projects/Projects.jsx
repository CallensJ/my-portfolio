import React, { useState } from "react";
import "./Projects.scss";
import Card from "./Card";
import items from "../../Data";
import Button from "./Button";

const allCategories = ['All', ...new Set(items.map(item => item.category))];

const Projects = () => {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if(button === 'All'){
      setMenuItem(items);
      return;
    }
    const filteredData = items.filter(item => item.category === button);
    setMenuItem(filteredData);
  }

  return (
    <>

      <section className="projects__section">
        <h2 className="section__title">Projects</h2>
        <div className="buttons-container">

        <Button button={buttons} filter={filter} />
        </div>
        <div className="projects__container">
            <Card menuItem={menuItem} />
        </div>
      </section>
    </>
  );
};

export default Projects;
