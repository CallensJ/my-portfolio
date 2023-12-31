import React from 'react'

const Button = ({filter}) => {
  return (
    <div className="filters">
    <button type="button" onClick={() => filter('FrontendMentor')}>FrontendMentor</button> 
    <button type="button" onClick={() => filter('Freecodecamp')}>Freecodecamp</button>
      <span className="filter__item">Wordpress</span>
    </div>
  )
}

export default Button