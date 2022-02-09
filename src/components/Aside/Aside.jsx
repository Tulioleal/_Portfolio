import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Style from './Aside.module.scss'
import SVG from '../SVG/svg'
import Img from '../../images/IMG_20210124_181009.jpg'
import Github from '../../images/Github.svg'
import LinkedIn from '../../images/LinkedIn.svg'
import Whatsapp from '../../images/Whatsapp.svg'

function Aside() {

    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        links {
                            Github {
                                alt
                                href
                            }
                            LinkedIn {
                                alt
                                href
                            }
                            Whatsapp {
                                alt
                                href
                            }
                        }
                    }  
                }
            }
        `
    )

    const github = data.site.siteMetadata.links.Github
    const linkedin = data.site.siteMetadata.links.LinkedIn
    const whatsapp = data.site.siteMetadata.links.Whatsapp

    return (
        <div className={Style.container} >
            <div className={Style.card}>
                <img src={Img} alt="Tulio Leal"/>
                <h2>Hi, I'm Tulio.</h2>
                <p>Fullstack web developer with an eye for good design</p>
            </div>
            <div className={Style.buttons}>
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </div>
            <div className={Style.icons}>
                <SVG
                    src={Github}
                    alt={github.alt}
                    href={github.href}
                />
                <SVG
                    src={LinkedIn}
                    alt={linkedin.alt}
                    href={linkedin.href}
                />
                <SVG
                    src={Whatsapp} 
                    alt={whatsapp.alt}
                    href={whatsapp.href}
                />
            </div>
        </div>
    )
}

export default Aside
