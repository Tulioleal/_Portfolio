import React from 'react'
import Style from './Form.module.scss'

import Mail from '../../images/Mail.svg'
import Home from '../../images/Home.svg'

function Form() {

    return (
        <>
            <h2>Contact me</h2>

            <div className={Style.container}>
                <form>
                    <div className={Style.div}>
                        <input type="text" placeholder='Name'/>
                        <input type="text" placeholder='Apellido'/>
                    </div>

                    <textarea cols="30" rows="10" placeholder='Your Message'></textarea>

                    <button>Send</button>
                </form>

                <div className={Style.info}>
                    <div className={Style.dir}>
                        <img src={Home} alt=""/>
                        <p>Villa Crespo, Buenos Aires, Argentina</p>
                    </div>
                    <div className={Style.email}>
                        <img src={Mail} alt=""/>
                        <p>tuliolealdev@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
