import React, { useEffect } from 'react';
import './alert.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = (props) => {

    useEffect(() => {
        if (props.msg.title === 'Success')
            toast.success(props.msg.body)
        else
            toast.error(props.msg.body)
    }, [])

    return (
        <ToastContainer autoClose={1500} role={'Error'} />
    )
}

export default Toast
