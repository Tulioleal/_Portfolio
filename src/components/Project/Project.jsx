import React from 'react'
import Style from './project.module.scss'

function Project( props ) {
    return (

        <div className={Style.card}>
            <a href={props.href}>
                <img src={props.src} alt=""/>
            </a>

            <section >
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </section>
        </div>
    )
}

export default Project
