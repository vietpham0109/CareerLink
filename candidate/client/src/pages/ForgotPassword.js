import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { forgot } from '../redux/actions/authAction'
import { Link } from 'react-router-dom'

const initialState = {
    email: '',
}

function ForgotPassword() {
    const [data, setData] = useState(initialState)

    const { email } = data
    const dispatch = useDispatch()

    const handleChangeInput = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const validateEmail = email => {
        // eslint-disable-next-line
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const forgotPassword = async () => {
        if (!validateEmail(email))
            return setData({ ...data, err: 'Invalid emails.', success: '' })
        dispatch(forgot(email))

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
                        <h2>Forgot Password</h2>
                        <div className="login-container">
                            <p>You don't have an account? <Link to="/register"><strong>Register Now</strong></Link></p>
                        </div>
                    </section>
                    <div className="input-container forgot-password">
                        <label htmlFor="email">Enter your email address</label>
                        <input type="email" name="email" id="email" value={email}
                            onChange={handleChangeInput} />
                        <button className="signup-btn" onClick={forgotPassword}>Verify your email</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword
