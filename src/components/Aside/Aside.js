import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Style from './Aside.module.scss'
import Img from '../../images/IMG_20210116_170555.jpg'
import Github from '../../images/Github.svg'
import LinkedIn from '../../images/LinkedIn.svg'
import Whatsapp from '../../images/Whatsapp.svg'

const SVG = (props) => (
    <a href={props.href}>
        <img src={props.src} alt={props.alt}/>
    </a>
)

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

    return (
        <div className={Style.container}>
            <div className={Style.card}>
                <img src={Img} alt="Tulio Leal"/>
                <h2>Hi, I'm Tulio.</h2>
                <p>Fullstack web developer with an eye for good design</p>
            </div>
            <div className={Style.buttons}>
                <a href='#About'>About</a>
                <a href='#Project'>Projects</a>
                <a href='#Contact'>Contact</a>
            </div>
            <div className={Style.icons}>
                <SVG
                    src={Github}
                    alt={data.site.siteMetadata.links.Github.alt}
                    href={data.site.siteMetadata.links.Github.href}
                />
                <SVG
                    src={LinkedIn}
                    alt={data.site.siteMetadata.links.LinkedIn.alt}
                    href={data.site.siteMetadata.links.LinkedIn.href}
                />
                <SVG
                    src={Whatsapp} 
                    alt={data.site.siteMetadata.links.Whatsapp.alt}
                    href={data.site.siteMetadata.links.Whatsapp.href}
                />
            </div>
        </div>
    )
}

export default Aside
