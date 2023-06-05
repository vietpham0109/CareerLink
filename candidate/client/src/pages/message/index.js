import React, { useEffect } from 'react'
import LeftSide from '../../components/message/LeftSide'

const Message = () => {
    let scroll = 0
    
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: scroll, behavior: 'smooth' })
        }, 100)
    }, [])

    return (
        <div className="message d-flex">
            <div className="col-md-3 border-right px-0">
                <LeftSide />
            </div>

            <div className="col-md-9 px-0 right_mess">
                <div className="d-flex justify-content-center 
                align-items-center flex-column h-100">

                    <i className="fab fa-facebook-messenger text-primary"
                    style={{fontSize: '5rem'}} />
                    <h4>Messenger</h4>

                </div>
            </div>
        </div>
    )
}

export default Message
