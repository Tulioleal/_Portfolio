import React from 'react'
import Aside from '../Aside/Aside'
import * as styles from './Layout.module.scss'

function Layout({ children }) {
    return (
        <main className={styles.container}>
            <div className={styles.aside}>
                <Aside />
            </div>
            {children}
        </main>
    )
}

export default Layout