import React from 'react'
import './svg.module.scss'

const SVG = (props) => (
    <a href={props.href} target='_blank' rel="noreferrer">
        <img 
            src={props.src}
            alt={props.alt}
            className="svg"
        />
    </a>
)

export default SVG