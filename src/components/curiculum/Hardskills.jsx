import React from 'react'

const Hardskills = () => {
  return (
    <div className="bloc">
        <h3 className='bloc__title'>HARD SKILLS</h3>
        
        <ul className="list">
            <li className="domain">Web Technology</li>
            <li className="skills"> SASS / Javascript</li>
        </ul>
        <ul className="list">
            <li className="domain">Database</li>
            <li className="skills">MySql / MongoDb </li>
        </ul>

        <ul className="list">
            <li className="domain">Frameworks & Libraries</li>
            <li className="skills">React / ReactNative / Express / TailwindCss / Bootstrap</li>
        </ul>

        <ul className="list">
            <li className="domain">Systèmes d'exploitations</li>
            <li className="skills">Windows / Linux(Debian,Arch) / Bsd(freeBsd)</li>
        </ul>
        <ul className="list">
            <li className="domain">Divers</li>
            <li className="skills">Analyses Forensics</li>
            <li className="skills">Hardware</li>
            <li className="skills">Securité systèmes & maintenance</li>
        </ul>
    </div>
  )
}

export default Hardskills