import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { register } from '../redux/actions/authAction'
import { useTranslation } from "react-i18next";

const Register = () => {
    const { t } = useTranslation();
    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const initialState = {
        firstname: '', lastname: '', email: '', password: '', cf_password: '', role: 'candidate'
    }
    const [userData, setUserData] = useState(initialState)
    const { firstname, lastname, email, password, cf_password } = userData

    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)

    useEffect(() => {
        if (auth.token && !auth.user?.company) history.push("/")
    }, [auth.token, history])


    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register(userData))

    }


    return (
        <div className="split-screen">
            <div className="left">
                <section className="copy">
                    <h1>{t('WelcometoCVLibrary')}</h1>
                    <p>{t('Over1000Rusumerealwithyou')}</p>
                </section>
            </div>
            <div className="right">
                <form onSubmit={handleSubmit}>
                    <section className="copy">
                        <h2>{t('Register')}</h2>
                        <div className="login-container">
                            <p>{t('Alreadyhaveanaccount')} <Link to="/login"><strong>{t('LoginNow')}</strong></Link></p>
                        </div>
                    </section>

                    <div className="input-container fullname">
                        <div className="col-6">
                            <label htmlFor="firstname">{t('FirstName')}</label>
                            <input type="text" id="firstname"
                                name="firstname"
                                onChange={handleChangeInput}
                                value={firstname}
                                placeholder="Firstname"
                                style={{ background: `${alert.fullname ? '#fd2d6a14' : ''}` }} />
                            <small className="form-text text-danger">
                                {alert.firstname ? alert.firstname : ''}
                            </small>
                        </div>
                        <div className="col-6">
                            <label htmlFor="lastname">{t('LastName')}</label>
                            <input type="text" id="lastname"
                                name="lastname"
                                onChange={handleChangeInput}
                                value={lastname}
                                placeholder="lastname"
                                style={{ background: `${alert.fullname ? '#fd2d6a14' : ''}` }} />
                            <small className="form-text text-danger">
                                {alert.lastname ? alert.lastname : ''}
                            </small>
                        </div>
                    </div>
                    <div className="input-container email">
                        <label htmlFor="InputEmail">Email</label>
                        <input type="email" id="InputEmail"
                            name="email"
                            onChange={handleChangeInput}
                            value={email}
                            placeholder="Email@rankwork.com"
                            style={{ background: `${alert.email ? '#fd2d6a14' : ''}` }}
                        />
                        <small className="form-text text-danger">
                            {alert.email ? alert.email : ''}
                        </small>
                    </div>

                    <div className="input-container password">
                        <label htmlFor="exampleInputPassword1">{t('Password')}</label>
                        <input type={typePass ? "text" : "password"}
                            id="exampleInputPassword1"
                            onChange={handleChangeInput}
                            value={password}
                            name="password"
                            placeholder="••••••••••••"
                            style={{ background: `${alert.password ? '#fd2d6a14' : ''}` }} />

                        <small className="show-pass" onClick={() => setTypePass(!typePass)}>
                            {typePass ? t('Hide') : t('Show')}
                        </small>
                        <small className="form-text text-danger">
                            {alert.password ? alert.password : ''}
                        </small>
                    </div>
                    <div className="input-container password">
                        <label htmlFor="cf_password">{t('Confirmpassword')}</label>
                        <input type={typeCfPass ? "text" : "password"}
                            id="cf_password"
                            onChange={handleChangeInput}
                            value={cf_password}
                            name="cf_password"
                            placeholder="••••••••••••"
                            style={{ background: `${alert.cf_password ? '#fd2d6a14' : ''}` }}
                        />
                        <small className="show-pass" onClick={() => setTypeCfPass(!typeCfPass)}>
                            {typeCfPass ? t('Hide') : t('Show')}
                        </small>
                        <small className="form-text text-danger">
                            {alert.cf_password ? alert.cf_password : ''}
                        </small>
                    </div>
                    <button type="submit" className="signup-btn">
                        {t('Register')}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register
