import React from 'react'
import Style from './project.module.scss'

function Project( props ) {
    return (

        <div className={Style.card}>
            <img src={props.img} alt=""/>
        </div>
    )
}

export default Project
