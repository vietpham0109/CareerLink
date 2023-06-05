import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { validationEmployer } from '../../redux/actions/authAction'

function ActivationEmailEmployer() {
    const { activation_token } = useParams()
    const dispatch = useDispatch()
    const { alert2 } = useSelector(state => state)
    useEffect(() => {
        dispatch(validationEmployer(activation_token))
    }, [dispatch, activation_token])

    return (
        <div className="active_page">
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">
                            {alert2.test}
                        </div>
                        <p class="card-text">Congratulation you active account successfully. Please
                            <Link to="/employer/login"><strong> Login Now</strong></Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivationEmailEmployer
