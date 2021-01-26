import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Style from './Projects.module.scss'
import Consul from '../../images/Home1-min.jpg'

import Fade from 'react-reveal/Fade'


const Project = ( props ) => {
  return (

      <div className={Style.card}>
          <a href={props.href}>
              <img src={props.src} alt=""/>
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

/*      const data = useStaticQuery(
        graphql`
        query Project {
            site {
              siteMetadata {
                Projects {
                  Consul {
                    content
                    href
                    repo
                    title
                  }
                }
              }
            }
          }
        `
    ) */

    // const { content, href, repo, title } = data.site.siteMetadata.Projects.Consul

    return (
        <div className={Style.img2}>
            <Fade >
              <Project
                // href = {href}
                // src = {Consul}
                // repo = {repo}
                // title = {title}
                // content = {content}
              />
            </Fade>
        </div>
    )
}

export default Projects
