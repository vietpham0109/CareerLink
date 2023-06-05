import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { reset } from '../redux/actions/authAction'

const initialState = {
    password: '',
    cf_password: '',
}

function ResetPassword() {
    const [data, setData] = useState(initialState)
    const { alert } = useSelector(state => state)
    const { token } = useParams()
    const dispatch = useDispatch()
    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)
    const { password, cf_password } = data

    const handleChangeInput = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleResetPass = async () => {
        dispatch(reset(token, password, cf_password))
        
    }

    return (
        <div className="split-screen">
            <div className="left">
                <section className="copy">
                    <h1>Welcome to RankWork</h1>
                    <p>Over 1000 Rusume real with you</p>
                </section>
            </div>
            <div className="right">
                <form>
                    <section className="copy">
                        <h2>Reset Password</h2>
                        <div className="login-container">
                            <p>You don't have an account? <Link to="/register"><strong>Register Now</strong></Link></p>
                        </div>
                    </section>
                    <div className="input-container password">
                        <label htmlFor="InputPassword">Password</label>
                        <input type={typePass ? "text" : "password"}
                            id="InputPassword"
                            onChange={handleChangeInput}
                            value={password}
                            name="password"
                            style={{ background: `${alert.password ? '#fd2d6a14' : ''}` }}
                        />
                        <small className="show-pass" onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'}
                        </small>
                        <small className="form-text text-danger">
                            {alert.password ? alert.password : ''}
                        </small>
                    </div>

                    <div className="input-container password">
                        <label htmlFor="cf_password">Confirm Password</label>
                        <input type={typeCfPass ? "text" : "password"}
                            id="cf_password"
                            onChange={handleChangeInput}
                            value={cf_password}
                            name="cf_password"
                            style={{ background: `${alert.cf_password ? '#fd2d6a14' : ''}` }}
                        />
                        <small className="show-pass" onClick={() => setTypeCfPass(!typeCfPass)}>
                            {typeCfPass ? 'Hide' : 'Show'}
                        </small>
                        <small className="form-text text-danger">
                            {alert.cf_password ? alert.cf_password : ''}
                        </small>
                    </div>

                    <button className="signup-btn" onClick={handleResetPass}>Reset Password</button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
