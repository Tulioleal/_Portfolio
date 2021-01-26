import React from 'react'
import Aside from '../Aside/Aside'
import Styles from './Layout.module.scss'

function Layout({ children }) {
    return (
        <div className={Styles.container}>
            <div className={Styles.aside}>
                <Aside />
            </div>
            {children}
        </div>
    )
}

export default Layout