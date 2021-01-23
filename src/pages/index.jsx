import React from 'react'
import Style from './index.module.scss'

import Project from '../components/Project/Project'
import Layout from '../components/Layout/Layout'
import Header from '../components/Header/Header'
import About from '../components/About/About.jsx'
import Form from '../components/Form/Form'

import Fade from 'react-reveal/Fade'

import image from '../images/pexels-picography-4776.jpg'

function Home() {

  return (
    <>
      <Layout className={Style.Layout}>
        <div className={Style.container}>
          
          <Header />

          <main className={Style.main} id='about'>
            <About />
          </main>

          <div className={Style.img2} id='projects'>

            <Fade >
              <Project
                src={image}
              />
              <Project
                src={image}
              />
              <Project
                src={image}
              />
            </Fade>

          </div>
          
          <div className={Style.contact} id='contact'>
            <Fade>
              <Form />
            </Fade>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home