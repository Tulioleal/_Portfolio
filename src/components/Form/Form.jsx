import React from 'react'
import Style from './Form.module.scss'
import SVG from '../SVG/svg'
import Fade from 'react-reveal/Fade'

import { graphql, useStaticQuery } from "gatsby"

import Mail from '../../images/Mail.svg'
import Home from '../../images/Home.svg'

function Form() {

    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        links {
                            Mail {
                                mailTo
                                copy
                                back
                            }
                        }
                    }  
                }
            }
      `
    )

    return (
        <>
            <footer className={Style.footer}>

                <Fade>
                    <h2>Contact me</h2>

                    <div className={Style.container}>
                        <form
                            method='post'
                            action={data.site.siteMetadata.links.Mail.back}
                        >
                            <div className={Style.div}>
                                <input
                                    type="text"
                                    placeholder='Name'
                                    name='name'
                                    id='name'
                                />
                                <input
                                    type="text"
                                    placeholder='Last name'
                                    name='last'
                                    id='last'
                                />
                            </div>
                            <textarea
                                type='text'
                                placeholder='Your Message'
                                name="message"
                            >
                            </textarea>

                            <button type="submit">Send</button>
                        </form>

                        <div className={Style.info}>
                            <div className={Style.dir}>
                                <SVG 
                                    src={Home}
                                />
                                <p>Villa Crespo, Buenos Aires, Argentina</p>
                            </div>
                            <div className={Style.email}>
                                <SVG 
                                    href={data.site.siteMetadata.links.Mail.mailTo}
                                    src={Mail}
                                    alt={data.site.siteMetadata.links.Mail.copy}
                                />
                                <p>tuliolealdev@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </footer>
        </>
    )
}

export default Form
