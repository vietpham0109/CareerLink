import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { validation } from '../redux/actions/authAction'
import { useTranslation } from "react-i18next";


function ActivationEmail() {
    const { t } = useTranslation();
    const { activation_token } = useParams()
    const dispatch = useDispatch()
    const { alert2 } = useSelector(state => state)
    useEffect(() => {
        dispatch(validation(activation_token))
    }, [dispatch, activation_token])

    return (
        <div className="active_page">
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">
                            {alert2.test}
                        </div>
                        <p class="card-text">{t('CongratulationyouactiveaccountsuccessfullyPlease')}
                        <Link to="/login"><strong>{t('LoginNow')} </strong></Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivationEmail
