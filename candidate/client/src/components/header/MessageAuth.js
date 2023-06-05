import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const MessageAuth = () => {
    const { t } = useTranslation();
    const [typeContent, setTypeContent] = useState(false)
    const { auth } = useSelector(state => state)

    return (
        <>
            <div className="message-auth">
                <div className="card">
                    <div className="header-message" onClick={() => setTypeContent(!typeContent)}>
                        <span>{t('Message')}</span>
                        {auth.token ?
                            <span className="right-header">
                                <Link to={`${!auth.isCompany ? '/message' : '/company/message'}`}><i style={{ color: '#007bff' }} className="fab fa-facebook-messenger"></i></Link>
                                {typeContent ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}
                            </span>
                            :
                            <span className="right-header">
                                <Link to="/login"><i className="fab fa-facebook-messenger"></i></Link>
                                {typeContent ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}
                            </span>
                        }
                    </div>
                    {auth.token ?
                        <div className="content-message" style={{ display: `${typeContent ? 'block' : 'none'}` }}>
                            <span>{t('cc')}</span>
                            <Link to={`${!auth.isCompany ? '/message' : '/company/message'}`}>
                                <button onClick={() => setTypeContent(false)} className="btn btn-new">{t('Newmessage')}</button>
                            </Link>
                        </div>
                        :
                        <div className="content-message" style={{ display: `${typeContent ? 'block' : 'none'}` }}>
                            <span>{t('cc')}</span>
                            <Link to="/login">
                                <button onClick={() => setTypeContent(false)} className="btn btn-new">{t('LoginNow')}</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>

        </>
    )
}

export default MessageAuth
