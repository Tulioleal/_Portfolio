import React from 'react'
import * as styles from './Projects.module.scss'
import ProjectList from './ProjectList';

import Fade from 'react-reveal/Fade'

const Project = ( props ) => {
  return (
      <div className={styles.card}>
          <a href={props.href} target='_blank' rel="noreferrer" >
                <img src={props.src} alt={props.alt}/> 
          </a>

          <section >
              <h3>{props.title}</h3>
              <p>{props.content}</p>
              <div className={styles.links}>

                  { props.href && (
                    <a href={props.href} target='_blank' rel="noreferrer">Site</a>
                    )
                  }

                  { props.repo && (
                      <a href={props.repo} target='_blank' rel="noreferrer">Repo</a>
                    )
                  }

              </div>
          </section>
      </div>
  )
}

function Projects() {

    return (
        <section className={styles.img2}>
            <Fade >
              <h2>Projects</h2>

              {
                Object.keys(ProjectList).map( project => (
                  <Project
                    href = {ProjectList[project].href}
                    alt = {ProjectList[project].title}
                    src = {ProjectList[project].img}
                    repo = {ProjectList[project].repo}
                    title = {ProjectList[project].title}
                    content = {ProjectList[project].content}
                  />
                ))
              }

            </Fade>
        </section>
    )
}

export default Projects
