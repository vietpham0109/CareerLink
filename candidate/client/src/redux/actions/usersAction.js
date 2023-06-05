import { getDataAPI, patchDataAPI, postDataAPI } from '../../utils/fetchData'
import { GLOBALTYPES } from './globalTypes'
import { createNotify } from './notifyAction'


export const getAllUsers = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await getDataAPI('users', data)
        dispatch({
            type: GLOBALTYPES.ALLUSER,
            payload: {
                users: res.data.users,
            }
        })
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } })

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg
            }
        })
    }
}



export const updateRole = (data, auth) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await patchDataAPI('update_role', { data }, auth.token)
        dispatch(getAllUsers(auth.token))
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.msg,
            }
        })

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg
            }
        })
    }
}

export const deleteUser = (data, auth) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await postDataAPI('delete', { data }, auth.token)
        dispatch(getAllUsers(auth.token))
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.msg,
            }
        })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg
            }
        })
    }
}

export const deleteJobForAdmin = (job, auth, socket) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await postDataAPI('delete_company_for_admin', { id: job._id }, auth.token)
        if (res.data.code === 1) {
            const msg = {
                id: job._id,
                text: 'has deleled your post.',
                recipients: [job.idCompany],
                url: ``,
            }
            dispatch(createNotify({ msg, auth, socket }))
        }

        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.msg,
            }
        })



    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg
            }
        })
    }
}

export const change_password = (data, token) => async (dispatch) => {
    try {
        // dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await postDataAPI("change-password", data, token)
        console.log(res)
    } catch (error) {

    }
}



