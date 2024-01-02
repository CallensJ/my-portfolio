import React from 'react';


const Button = ({filter}) => {
  return (
    <div className="filters">
    <button type="button" className="btn" onClick={() => filter('FrontendMentor')}>FrontendMentor</button> 
    <button type="button" className="btn" onClick={() => filter('Freecodecamp')}>Freecodecamp</button>
    
    </div>
  )
}

export default Button