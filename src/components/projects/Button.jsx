import React from 'react';


const Button = ({button, filter}) => {
  return (
    <div className="filters">
      {/*
      <button type="button" className="btn" onClick={() => filter('FrontendMentor')}>FrontendMentor</button> 
      <button type="button" className="btn" onClick={() => filter('Freecodecamp')}>Freecodecamp</button>
      */}
      {
        button.map((cat, i) =>{
          return <button type="button" className='btn' onClick={()=> filter(cat)}>{cat}</button>
        })
      }
    </div>
  )
}

export default Button