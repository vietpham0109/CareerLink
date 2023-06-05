import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProfileUser from '../../components/profile/ProfileUser'
import { getProfileUsers } from '../../redux/actions/profileAction'

const Profile = () => {
    const { profile, auth } = useSelector(state => state)
    const dispatch = useDispatch()

    const { id } = useParams()

    useEffect(() => {
        if (profile.ids.every(item => item !== id)) {
            dispatch(getProfileUsers({ id, auth }))
        }
    }, [id, auth, dispatch, profile])

    return (
        <div className='container'>
            <ProfileUser auth={auth} profile={profile} dispatch={dispatch} id={id}/>
        </div>
    )
}

export default Profile
