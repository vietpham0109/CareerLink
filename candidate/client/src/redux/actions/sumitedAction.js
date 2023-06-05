import { getDataAPI, postDataAPI } from '../../utils/fetchData'
import { GLOBALTYPES } from './globalTypes'
import { createNotify } from './notifyAction'


export const getListSubmited = (auth) => async (dispatch) => {
    try {
        const res = await getDataAPI('get_submited', auth.token)
        dispatch({
            type: GLOBALTYPES.SUBMITEDRESUME,
            payload: {
                submited: res.data
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

export const getListSubmitedForCompany = (id, auth) => async (dispatch) => {
    try {
        const res = await getDataAPI('get_submited_for_company', auth.token)
        let data = {}
        if (id) {
            // eslint-disable-next-line array-callback-return
            res.data.map(element => {
                if (element.idJob === id) {
                    data = { ...element }
                }
            })
        }


        dispatch({
            type: GLOBALTYPES.SUBMITEDRESUME,
            payload: {
                submited: data,
                submitedByCompany: res.data
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

export const unSubmit = (idJob, auth) => async (dispatch) => {
    try {
        const res = await postDataAPI('unsubmit_cv', { idJob }, auth.token)
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.msg
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

export const setStatus = (idJob, idCV, idCandidate, status, auth, socket) => async (dispatch) => {
    try {
        const res = await postDataAPI('set_status', { idJob, idCV, status, idCandidate }, auth.token)

        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.msg
            }
        })
        dispatch(getListSubmitedForCompany(idJob, auth))
        // Notify
        const msg = {
            id: res.data.idJob,
            text: 'Your resume has been ' + res.data.status,
            recipients: [res.data.idCandidate],
            url: `/jobdetail/${res.data.idJob}`,
            // image: logo ? mediaLogo[0].url : ''
        }

        dispatch(createNotify({ msg, auth, socket }))
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg
            }
        })
    }
}

export const getAllSubmitedForCompany = (idCompany, auth) => async (dispatch) => {
    try {
        const res = await getDataAPI('get_submited_for_company', auth.token)

        dispatch({
            type: GLOBALTYPES.SUBMITEDRESUME,
            payload: {
                submited: res.data ? res.data.filter(element => element.idCompany === idCompany) : []
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

export const deleteCV = (idJob, idCV, auth) => async (dispatch) => {
    try {
        const res = await postDataAPI('delete_cv', { idJob, idCV }, auth.token)

        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.msg
            }
        })
        dispatch(getListSubmitedForCompany(idJob, auth))
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg
            }
        })
    }
}