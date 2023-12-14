import React from 'react';
import './Curiculum.scss';
import ExperienceBloc from './ExperienceBloc';
import EducationBloc from './EducationBloc';


const Curiculum = () => {
  return (
    <section className="curiculum__section">
      <h1 className="section__title">Mon Curiculum</h1>
      <span className="section__subtitle">The online version</span>
      <div className='container'>
        <article className='experience'>
         
          <ExperienceBloc />
        </article>
        <article className="education">
          <EducationBloc />
        </article>
      </div>
    </section>
  )
}

export default Curiculum