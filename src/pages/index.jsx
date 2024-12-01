import React from 'react'
import  * as styles from './index.module.scss'

import Layout from '../components/Layout/Layout'
import Aside from '../components/Aside/Aside'
import Header from '../components/Header/Header'
import About from '../components/About/About.jsx'
import Projects from '../components/Projects/Projects.jsx'
import Form from '../components/Form/Form'
import SEO from '../components/Seo/Seo'

import { graphql } from 'gatsby';

function Home({ data }) {

  return (
      <Layout>
        <SEO
          title= 'Portfolio'
          description={data.site.siteMetadata.description}
        />
        <div className={styles.container}>
          
          <Header />
          
          <Aside />

          <div id='about'>
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
  )
}

export const query = graphql`
query MyQuery {
  site {
    siteMetadata {
      description
      title
    }
  }
}
`

export default Home
