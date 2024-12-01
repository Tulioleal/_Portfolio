import React from 'react'
import Aside from '../Aside/Aside'
import './Layout.module.scss'

function Layout({ children }) {
    return (
        <div className="container">
            <div className="aside">
                <Aside />
            </div>
            {children}
        </div>
    )
}

export default Layout