import React from 'react'
import './Portfolio.css'
import ProjectsData from './ProjectTilesData.js'
import ProjectTile from './ProjectTile'
import ProjectSection from './ProjectSection'
import { useState, useEffect } from 'react'
import Email from './Email'
import { Link } from 'react-router-dom'
// import waitlistImage from '/public/imgs/ProjectImages/waitlist.PNG'
// import wI from '/imgs/waitlist.png'


function Portfolio() {

  //close grid-to side, open project, loader

  const [data, setData] = useState(ProjectsData)
  const [currentProject, setCurrentProject] = useState(0)
  const [grid, setGrid] = useState(true)
  const [display, setDisplay] = useState(false)

  const changeCurrentProject = (num) => {
    console.log(num)
    if(grid){
      setGrid(false)
    }
    setCurrentProject(num)
    setDisplay(true)
  }

  

  const ProjectsGrid = data.map((project) => 
    <ProjectTile
        changeCurrentProject={changeCurrentProject}
        key={project.id}
        id={project.id}
        name={project.name}
        image={project.image}
        info={project.info}
    />
  )
  return (
    <>
      <h3 className='portfolio-title'>    Featured Projects</h3>
        <p className="under-construction">Currently Under Construction 🐱‍💻</p>
      <div className='portfolio-cont'>
        
        <div className={ grid ? 
          "projects-grid-open" : "projects-grid-side"}
        >
          {/* view as grid button  */}
          {ProjectsGrid}
        </div>   
        <ProjectSection 
          displayProject={display} 
          sentProject={currentProject}
        />
        
      </div>
      <p className='thanks'>Thanks for browsing, for any questions feel free to reach out <span><Link to="/email">here</Link></span></p>
        {/* <Email/> */}
    </>
  )
}

export default Portfolio