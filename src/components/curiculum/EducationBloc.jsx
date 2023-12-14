import React from 'react'

const EducationBloc = () => {
  return (
    <div className="educationBloc">
        <h2 className="bloc__title">Education</h2>
        <ul className='education-list'>
          <li className='education-date'>2021-2022</li>
          <li className="award">Developpeur web & web mobile</li>
          <li className="award-school"><a href="https://occitanie.simplon.co">Simplon Occitanie</a></li>
        </ul>
        <ul className="education-list">
        <li className='education-date'>2001-2003</li>
          <li className="award">Bep Electronique</li>
          <li className="award-school"><a href="https://lycee-gustave-eiffel.fr">Lycée gustave eiffel</a></li>
        </ul>

        <ul className="education-list">
          <li>Mooc</li>
        <li className='education-date'>2023</li>
          <li className="award">Web design certification</li>
          <li className="award-school"><a href="https://www.freecodecamp.org">Free code camp</a></li>
        </ul>

        
    </div>
  )
}

export default EducationBloc