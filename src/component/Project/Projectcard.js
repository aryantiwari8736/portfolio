import React from 'react'
import './Projectcard.css'
import project1  from '../../assets/project.png'
function Projectcard() {
  return (
    <div className='main'>
        <div className='projecthead'><span className='projhead'> 0.2 </span>Somethings I've built </div>
        <div className='projcont'>
      <img src={project1} alt="" className='img' />
      <div className='aboutproject'>
        <div className='aboutprojhead'>Featured Project</div>
        <div className='projname'>Resume Builder</div>
        <div className="projdetail">A full stack website where you can build your resume in different themes</div>
        <div className='techused'>Nodejs,MongoDb,ejs,PassportJs</div>
        <div className='icon'><a href="https://github.com/aryantiwari8736/resume-builder" target="_blanck"><i class="fa-brands fa-github fa-2x icos"></i></a><a href="https://temp-app-reumemaker.herokuapp.com/" target="_blanck"><i class="fa-solid fa-link fa-2x icos"></i></a></div>
      </div>
      </div>
    </div>
  )
}

export default Projectcard
