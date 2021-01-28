import React from 'react'
import Fade from 'react-reveal/Fade'
import Style from './About.module.scss'

const Bar = (props) => (
  <Fade>
    <div className={props.style}>
      <div className={Style.progress}>
        <p>{props.title}</p>
      </div>
    </div>
  </Fade>
)

function About() {
    return (
        <main>
            <section className={Style.about}>

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

            <section className={Style.skills}>

                <Fade>
                  <h2>Skills</h2>
                </Fade>

                <div className={Style.bars}>

                    <Bar
                      title='HTML'
                      style={Style.html}
                      />
                    <Bar
                      title='CSS'
                      style={Style.css}
                      />
                    <Bar
                      title='Javascript'
                      style={Style.js}
                      />
                    <Bar
                      title='NodeJs'
                      style={Style.ndjs}
                      />
                    <Bar
                      title='React'
                      style={Style.react}
                      />
                  </div>

            </section>
        </main>
    )
}

export default About
