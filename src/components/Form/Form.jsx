import React from 'react'
import * as styles from './Form.module.scss'
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
            <footer className={styles.footer}>

                <Fade>
                    <h2>Contact me</h2>

                    <div className={styles.container}>
                        <form
                            method='post'
                            action={data.site.siteMetadata.links.Mail.back}
                        >
                            <div className={styles.div}>
                                <label for='name'>
                                    <input
                                        type="text"
                                        placeholder='Name'
                                        name='name'
                                        id='name'
                                    />
                                </label>
                                <label for='last'>
                                    <input
                                        type="text"
                                        placeholder='Last name'
                                        name='last'
                                        id='last'
                                    />
                                </label>
                            </div>

                            <label for='message'>
                                <textarea
                                    type='text'
                                    placeholder='Your Message'
                                    name="message"
                                        id='message'
                                >
                                </textarea>
                            </label>

                            <button type="submit">Send</button>
                        </form>

                        <div className={styles.info}>
                            <div className={styles.dir}>
                                <SVG 
                                    src={Home}
                                    href='https://www.google.com/maps/d/u/0/viewer?msa=0&hl=es-419&ie=UTF8&t=m&ll=-34.59787734054651%2C-58.43832020703779&spn=0.021196%2C0.029569&z=15&source=embed&mid=1gOfeYaSUADZni8MKnCXYoZ2jhmU'
                                    alt='Home'
                                />
                                <p>Villa Crespo, Buenos Aires, Argentina</p>
                            </div>
                            <div className={styles.email}>
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
