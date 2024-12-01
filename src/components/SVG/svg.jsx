import React from 'react'
import * as styles from './svg.module.scss'

const SVG = (props) => (
    <a href={props.href} target='_blank' rel="noreferrer">
        <img 
            src={props.src}
            alt={props.alt}
            className={styles.svg}
        />
    </a>
)

export default SVG