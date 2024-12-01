import React from 'react'
import './Header.module.scss'
import Fade from 'react-reveal/Fade';

function Header() {
    
    return (
        <>
            <header className="img1">
                <img src="../../images/header-desk.jpg" alt="" />
               <Fade top cascade delay={800}>
                   <div>
                        <h1>Welcome!</h1>
                        <h2>Tulio Leal</h2>
                        <h3>Engineer</h3>
                        <h3>Developer</h3>
                        <h3>CODER</h3>
                   </div>
                </Fade>
            </header>
        </>
    )
}

export default Header
