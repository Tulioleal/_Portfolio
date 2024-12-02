import React from 'react'
import Fade from 'react-reveal/Fade'
import * as styles from './About.module.scss'

function About() {
    return (
        <section>
            <section className={styles.about}>

              <Fade top>
                <h2>Hi There</h2>
              </Fade>
              <Fade bottom delay={500}>
                <p>
                  Started learning about HTML, CSS and Javascript out of curiosity a and way to enter in the job market, but I discovered my passion in Web development.<br/>
                  I'm a Venezuelan Industrial Engineer living in Buenos Aires since 2019, in early 2020 my journey as a web developer began, from that day on, i've never stopped learning.<br/>
                  I love simple, clean and effective UI.
                </p>
              </Fade>

            </section>

            <section className={styles.skills}>

                <Fade>
                  <h2>Skills</h2>
                </Fade>

                <ul className={styles.skillList}>
                    <li>
                      Next.js
                    </li>
                    <li>
                      Typescript
                    </li>
                    <li>
                      Flutter
                    </li>
                    <li>
                      Node.js
                    </li>
                    <li>
                      Express.js
                    </li>
                    <li>
                    Firebase
                    </li>
                </ul>

            </section>
        </section>
    )
}

export default About
