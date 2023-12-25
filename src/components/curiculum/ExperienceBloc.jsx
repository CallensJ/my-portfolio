import React from "react";

const ExperienceBloc = () => {
  return (
    <div className="experienceBloc bloc">
      <h3 className="bloc__title">Expérience</h3>
      <ul className="list">
        <li className="date">2021-2022</li>
        <li className="company">
          <a href="#" className="link">
          Howby
          </a>
        </li>
        <li className="occupation">Stagiaire</li>
      </ul>

      <ul className="list">
        <li className="date">2013-2017</li>
        <li className="company">
          <a href="#" className="link">
            Cevennes Informatique
          </a>
        </li>
        <li className="occupation">Dirigeant</li>
      </ul>

      <ul className="list">
        <li className="date">2010-2012</li>
        <li className="company">
          <a href="https://www.partner-logistic.com/en/" className="link">
          Partner Logistic
          </a>
        </li>
        <li className="occupation">Assistant Administration réseau</li>
      </ul>
    </div>
  );
};

export default ExperienceBloc;
