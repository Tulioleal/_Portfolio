import React from 'react'
import Style from './Form.module.scss'

import Mail from '../../images/Mail.svg'
import Home from '../../images/Home.svg'

function Form() {

    return (
        <>
            <h2>Contact me</h2>

            <div className={Style.container}>
                <form method='post' action="https://getform.io/f/6d2b6ff7-c15f-41c4-9a3e-890141963819">
                    <div className={Style.div}>
                        <input
                            type="text"
                            placeholder='Name'
                            name='name'
                            id='name'
                        />
                        <input
                            type="text"
                            placeholder='Last name'
                            name='last'
                            id='last'
                        />
                    </div>

                    <input
                        type='text'
                        placeholder='Your Message'
                        name="message"
                        id={Style.message}
                    />

                    <button type="submit">Send</button>
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
