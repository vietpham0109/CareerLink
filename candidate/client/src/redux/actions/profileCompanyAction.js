import { getDataAPI, patchDataAPI } from '../../utils/fetchData'
import { imageUpload } from '../../utils/imageUpload'
import { DeleteDataFollow, GLOBALTYPES } from './globalTypes'
import { getListCompany } from './listCompanyAction'


export const PROFILECOMPANY_TYPES = {
    LOADING: 'LOADING_PROFILE',
    GET_USER: 'GET_PROFILE_USER',
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    GET_ID: 'GET_PROFILE_ID',
    GET_POSTS: 'GET_PROFILE_POSTS',
    UPDATE_POST: 'UPDATE_PROFILE_POST'
}



export const updateProfileUser = ({ userData, avatar, auth }) => async (dispatch) => {
    if (!userData.fullname)
        return dispatch({ type: GLOBALTYPES.ALERT, payload: { error: "Please add your full name." } })

    if (userData.fullname.length > 25)
        return dispatch({ type: GLOBALTYPES.ALERT, payload: { error: "Your full name too long." } })

    if (userData.story.length > 200)
        return dispatch({ type: GLOBALTYPES.ALERT, payload: { error: "Your story too long." } })

    try {
        let media;
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })

        if (avatar) media = await imageUpload([avatar])

        const res = await patchDataAPI("user", {
            ...userData,
            avatar: avatar ? media[0].url : auth.user.avatar
        }, auth.token)

        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                ...auth,
                user: {
                    ...auth.user, ...userData,
                    avatar: avatar ? media[0].url : auth.user.avatar,
                }
            }
        })

        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}

export const followCompany = ({ company, auth, socket }) => async (dispatch) => {


    let newUser;
    if (auth.user.followCompany.every(item => item._id !== company.idCompany)) {
        try {
            newUser = await patchDataAPI(`user/${company.idCompany}/followcompany`, null, auth.token)
            // socket.emit('follow', res.data.)
        } catch (err) {
            console.log(err.messeger)
        }
    }
    dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
            ...auth,
            user: { ...auth.user, followCompany: [...auth.user.followCompany, newUser.data.newUser._id] }
        }
    })
}

export const unFollowCompany = ({ company, auth, socket }) => async (dispatch) => {

    let newUser;

    if (auth.user.followCompany.every(item => item._id !== company.idCompany)) {
        try {
            newUser = await patchDataAPI(`user/${company.idCompany}/unfollowcompany`, null, auth.token)

        } catch (err) {

            console.log(err.messeger)
        }
    }
    dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
            ...auth,
            user: { ...auth.user, followCompany: DeleteDataFollow(auth.user.followCompany, newUser.data.newUser._id) }
        }
    })
}

export const followJob = ({ job, auth, socket }) => async (dispatch) => {


    let newUser;
    if (auth.user.followCompany.every(item => item._id !== job._id)) {
        try {
            newUser = await patchDataAPI(`user/${job._id}/followjob`, null, auth.token)

           
        } catch (err) {
            console.log(err.messeger)
        }
    }
    dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
            ...auth,
            user: { ...auth.user, followJob: [...auth.user.followJob, newUser.data.id] }
        }
    })
}

export const unFollowJob = ({ job, auth, socket }) => async (dispatch) => {

    let newUser;
    if (auth.user.followJob.every(item => item._id !== job._id)) {
        try {
            newUser = await patchDataAPI(`user/${job._id}/unfollowjob`, null, auth.token)


        } catch (err) {
            console.log(err.messeger)
        }
    }
    dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
            ...auth,
            user: { ...auth.user, followJob: DeleteDataFollow(auth.user.followJob, newUser.data.id) }
        }
    })
}

export const getProfileCompany = ({ idCompany, auth }) => async (dispatch) => {

    try {
        const res = await getDataAPI(`get_info_company${idCompany}`, auth.token)



        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                ...auth,
                profileCompany: res.data
            }
        })
    } catch (err) {
        console.log(err.messeger)
    }
}



export const updateProfileCompany = ({ companyData, logo, auth }) => async (dispatch) => {

    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        let media
        if (!logo.name)
            console.log('done')
        else
            if (logo && logo.name)
                media = await imageUpload([logo])
        const res = await patchDataAPI('update_info_company', { ...companyData, logo: logo.name ? media[0].url : logo }, auth.token)


        dispatch(getListCompany())
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
        // dispatch({
        //     type: GLOBALTYPES.AUTH,
        //     payload: {
        //         ...auth,
        //         profileCompany: res.data
        //     }
        // })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}

