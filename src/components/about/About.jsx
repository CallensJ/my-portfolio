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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pretium, lorem eu dictum pharetra, orci risus dictum
            eros, pellentesque molestie orci ante non odio. Donec volutpat
            sodales orci, ut posuere erat elementum a. Aenean convallis
            malesuada diam vitae eleifend. Nullam sit amet neque id nulla
            venenatis ultricies et ac quam. Nunc mollis, justo at ultricies
            vehicula, lacus neque pharetra eros, ut aliquet tellus mi non orci
          </p>
          <a href="https://callensj.github.io/curiculum/" className="btn">Voir mon CV</a>
        </div>
      </div>
    </section>
  );
};

export default About;
