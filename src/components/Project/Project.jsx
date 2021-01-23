import React from 'react'
import Style from './project.module.scss'

function Project( props ) {
    return (

        <div className={Style.card}>
            <img src={props.src} alt=""/>
            <section >
                <h3>Project</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error molestias quo sunt itaque voluptatibus culpa inventore iusto illo repellat eveniet.</p>
            </section>
        </div>
    )
}

export default Project
