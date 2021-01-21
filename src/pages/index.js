import React from 'react'
import Style from './index.module.scss'

import Project from '../components/Project/Project'
import Layout from '../components/Layout/Layout'

function Home() {

  return (
    <>
      <Layout className={Style.Layout}>
        <div className={Style.container}>
          <div className={Style.img1}>
            <h1>Welcome!</h1>
            <h2>I'm Tulio</h2>
            <h3>Engineer</h3>
            <h3>Developer</h3>
            <h3>CODER</h3>
          </div>
          <main className={Style.main} id='About'>
            <section className={Style.about}>

              <h2>Hi There</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias necessitatibus cum, architecto esse fugiat qui eveniet? Nam deleniti inventore, modi corrupti iusto eum mollitia labore? Vel, eaque dolore id, provident distinctio voluptas doloremque et non eligendi commodi numquam ipsa voluptates mollitia? Adipisci a dolor ratione sint obcaecati, quia voluptates provident.</p>

            </section>

            <section className={Style.skils}>

            </section>

          </main>

          <div className={Style.img2}>
            <Project img='../images/pexels-fernando-dos-santos-campos-2510245.jpg'/>
          </div>
          <div className={Style.contact}></div>
        </div>
      </Layout>
    </>
  )
}

export default Home
