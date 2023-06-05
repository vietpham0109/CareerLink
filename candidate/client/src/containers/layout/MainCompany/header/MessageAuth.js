import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MessageAuth = () => {

    const [typeContent, setTypeContent] = useState(false)
    const { auth } = useSelector(state => state)

    return (
        <>
            <div className="message-auth">
                <div className="card">
                    <div className="header-message" onClick={() => setTypeContent(!typeContent)}>
                        <span>Message</span>
                        {auth.token ?
                            <span className="right-header">
                                <Link to="/company/message"><i style={{ color: '#007bff' }} className="fab fa-facebook-messenger"></i></Link>
                                {typeContent ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}
                            </span>
                            :
                            <span className="right-header">
                                <Link to="/company/login"><i className="fab fa-facebook-messenger"></i></Link>
                                {typeContent ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}
                            </span>
                        }
                    </div>
                    {auth.token ?
                        <div className="content-message" style={{ display: `${typeContent ? 'block' : 'none'}` }}>
                            <span>Connect with others on RankWorks by beginning a new conversation.</span>
                            <Link to="/company/message">
                                <button onClick={() => setTypeContent(false)} className="btn btn-new">New message</button>
                            </Link>
                        </div>
                        :
                        <div className="content-message" style={{ display: `${typeContent ? 'block' : 'none'}` }}>
                            <span>Connect with others on RankWorks by beginning a new conversation.</span>
                            <Link to="/company/login">
                                <button onClick={() => setTypeContent(false)} className="btn btn-new">Login</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>

        </>
    )
}

export default MessageAuth
