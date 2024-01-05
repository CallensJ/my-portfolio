import React from "react";
import "./About.scss";
import Me from "../../assets/Me.jpg";

const About = () => {
  return (
    <section className="about__section">
      <h1 className="section__title">About Me</h1>
      <span className="section__subtitle">Mon introduction</span>

      <div className="about__container">
        <img src={Me} alt="" className="about__img" />
        <div className="about__data">
          <p className="about__text">
            Passionné d’informatique depuis toujours et principalement de
            hardware j’ai bifurqué de mon chemin et emprunté celui du
            développement web. Récemment diplômé et motivé j’utilise mes
            nouvelles compétences acquises pour en gagner de nouvelles à chaque
            nouveau projet. Je serai ravi de participer à votre projet web.
          </p>
          <a href="https://callensj.github.io/curiculum/" className="btn">
            Voir mon CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
