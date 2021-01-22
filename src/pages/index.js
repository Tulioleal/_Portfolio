import React from 'react'
import Style from './index.module.scss'

import Project from '../components/Project/Project'
import Layout from '../components/Layout/Layout'
import Header from '../components/Header/Header'
import Form from '../components/Form/Form'

import image from '../images/pexels-picography-4776.jpg'

function Home() {

  return (
    <>
      <Layout className={Style.Layout}>
        <div className={Style.container}>
          
          <Header />

          <main className={Style.main} id='About'>
            <section className={Style.about}>

              <h2>Hi There</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias necessitatibus cum, architecto esse fugiat qui eveniet? Nam deleniti inventore, modi corrupti iusto eum mollitia labore? Vel, eaque dolore id, provident distinctio voluptas doloremque et non eligendi commodi numquam ipsa voluptates mollitia? Adipisci a dolor ratione sint obcaecati, quia voluptates provident.</p>

            </section>

            <section className={Style.skils}>

            </section>

          </main>

          <div className={Style.img2}>

            <Project
              src={image}
            />
            <Project
              src={image}
            />
            <Project
              src={image}
            />

          </div>
          
          <div className={Style.contact}>
            <Form />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
