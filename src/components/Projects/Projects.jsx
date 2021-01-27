import React from 'react'
import Style from './Projects.module.scss'
import Consul from '../../images/Home1-min.jpg'
import ProjectList from './ProjectList';

import Fade from 'react-reveal/Fade'

const Project = ( props ) => {
  return (

      <div className={Style.card}>
          <a href={props.href} >
                <img src={props.src} alt={props.alt}/>
                
          </a>

          <section >
              <h3>{props.title}</h3>
              <p>{props.content}</p>
              <div className={Style.links}>
                  <a href={props.href}>Site</a>
                  <a href={props.repo}>Repo</a>
              </div>
          </section>
      </div>
  )
}

function Projects() {

    return (
        <div className={Style.img2}>
            <Fade >
              <h2>Projects</h2>
              <Project
                href = {ProjectList.ConsultorioApp.href}
                alt = {ProjectList.ConsultorioApp.title}
                src = {Consul}
                repo = {ProjectList.ConsultorioApp.repo}
                title = {ProjectList.ConsultorioApp.title}
                content = {ProjectList.ConsultorioApp.content}
              />
            </Fade>
        </div>
    )
}

export default Projects
