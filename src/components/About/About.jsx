import React from 'react'
import Fade from 'react-reveal/Fade'
import Style from './About.module.scss'

const Bar = (props) => (
  <div className={props.style}>
    <h4>{props.title}</h4>
  </div>
)

function About() {
    return (
        <>
            <section className={Style.about}>

              <Fade top>
                <h2>Hi There</h2>
              </Fade>
              <Fade bottom delay={500}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias necessitatibus cum, architecto esse fugiat qui eveniet? Nam deleniti inventore, modi corrupti iusto eum mollitia labore? Vel, eaque dolore id, provident distinctio voluptas doloremque et non eligendi commodi numquam ipsa voluptates mollitia? Adipisci a dolor ratione sint obcaecati, quia voluptates provident.</p>
              </Fade>

            </section>

            <section className={Style.skills}>

                <Fade>
                  <h2>Skills</h2>
                </Fade>
                
                <Fade left>

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

                </Fade>

            </section>
        </>
    )
}

export default About
