import { GLOBALTYPES } from './globalTypes'
import { getDataJob } from '../../utils/fetchData'

export const getTypeJob = () => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const resInternship = await getDataJob('get_job_by_type', { jobType: 'Internship' })
        const resPartTime = await getDataJob('get_job_by_type', { jobType: 'Part-time' })
        const resFullTime = await getDataJob('get_job_by_type', { jobType: 'Full-time' })
        dispatch({

            type: GLOBALTYPES.HOMEJOB,
            payload: {
                jobInternship: resInternship.data,
                jobPartTime: resPartTime.data,
                jobFullTime: resFullTime.data
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

