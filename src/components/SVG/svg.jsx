import React from 'react'
import Style from './svg.module.scss'

const SVG = (props) => (
    <a href={props.href}>
        <img 
            src={props.src}
            alt={props.alt}
            className={Style.svg}
        />
    </a>
)

export default SVG