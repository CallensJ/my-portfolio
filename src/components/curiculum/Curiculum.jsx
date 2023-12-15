import React from "react";
import "./Curiculum.scss";
import ExperienceBloc from "./ExperienceBloc";
import EducationBloc from "./EducationBloc";
import Hardskills from "./Hardskills";
import SoftSkills from "./SoftSkills";


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
      <h2>Skills</h2>
     <Hardskills />
     <SoftSkills />
    </section>
    </>
  );
};

export default Curiculum;
