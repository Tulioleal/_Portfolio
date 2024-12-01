import React from 'react'
import Fade from 'react-reveal/Fade'
import * as styles from './About.module.scss'

const Bar = (props) => (
  <Fade>
    <div className={props.style}>
      <div className={styles.progress}>
        <p>{props.title}</p>
      </div>
    </div>
  </Fade>
)

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

                <div className={styles.bars}>

                    <Bar
                      title='CSS'
                      style={styles.css}
                    />
                    <Bar
                      title='Javascript'
                      style={styles.js}
                    />
                    <Bar
                      title='NodeJs'
                      style={styles.ndjs}
                    />
                    <Bar
                      title='React'
                      style={styles.react}
                    />
                  </div>

            </section>
        </section>
    )
}

export default About
