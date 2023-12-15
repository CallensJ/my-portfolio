import React from "react";

const EducationBloc = () => {
  return (
    <div className="educationBloc">
      <h2 className="bloc__title">Education</h2>
      <div></div>
      <ul className="education-list">
        <li className="date">2021-2022</li>
        <li className="award-school">
          <a href="https://occitanie.simplon.co" className="award-link">
            Simplon Occitanie
          </a>
        </li>
        <li className="award">Developpeur web & web mobile</li>
      </ul>
      <ul className="education-list">
        <li className="date">2001-2003</li>
        <li className="award-school">
          <a href="https://lycee-gustave-eiffel.fr" className="award-link">
            Lycée gustave eiffel
          </a>
        </li>
        <li className="award">Bep Electronique</li>
      </ul>

      <ul className="education-list">
        <li>Mooc</li>
        <li className="date">2023</li>
        <li className="award-school">
          <a href="https://www.freecodecamp.org" className="award-link">
            Free code camp
          </a>
        </li>
        <li className="award">Web design certification</li>
      </ul>
    </div>
  );
};

export default EducationBloc;
