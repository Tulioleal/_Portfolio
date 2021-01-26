import React from 'react'
import Style from './index.module.scss'

import Layout from '../components/Layout/Layout'
import Aside from '../components/Aside/Aside'
import Header from '../components/Header/Header'
import About from '../components/About/About.jsx'
import Form from '../components/Form/Form'


import Projects from '../components/projects/projects'

function Home() {

  return (
    <>
      <Layout className={Style.Layout}>
        <div className={Style.container}>
          
          <Header />

          <Aside />

          <div id="about">
            <About/>
          </div>

          <div id='projects'>

            <Projects />

          </div>
          
          <div id='contact'>
              <Form />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
