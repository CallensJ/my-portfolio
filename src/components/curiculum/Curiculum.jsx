import React from "react";
import "./Curiculum.scss";
import ExperienceBloc from "./ExperienceBloc";
import EducationBloc from "./EducationBloc";

const Curiculum = () => {
  return (
    <>
    
    <section className="curiculum__section">
      <h1 className="section__title">Curiculum</h1>
      <span className="section__subtitle">online version</span>

      {/*bloc contenu du  Curiculum */}
      <div className="container">
        <ExperienceBloc />

        <EducationBloc />
      </div>
    </section>

    <section className="skills__section">
    <h1 className="section__title">TECHNICAL SKILLS</h1>
    </section>
    </>
  );
};

export default Curiculum;
