import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followJob, unFollowJob } from '../redux/actions/profileCompanyAction'
import './FollowBtn.scss'
import { useTranslation } from "react-i18next";


const FollowCompanyBtn = ({ job }) => {
    const { t } = useTranslation();
    const [followed, setFollowed] = useState(false)
    const { auth, socket } = useSelector(state => state)
    const dispatch = useDispatch()
    const [load, setLoad] = useState(false)

    useEffect(() => {

        if (auth.user.followJob.find(item => item === job._id)) {
            return setFollowed(true)
        }

        return () => setFollowed(false)
    }, [auth.user.followJob, job._id, dispatch])

    const handleFollow = async () => {
        if (load) return;

        setFollowed(true)
        setLoad(true)
        await dispatch(followJob({ job, auth, socket }))

        setLoad(false)
    }

    const handleUnFollow = async () => {
        if (load) return;

        setFollowed(false)
        setLoad(true)
        await dispatch(unFollowJob({ job, auth, socket }))
     
        setLoad(false)
    }

    return (
        <>
            {
                followed
                    ? <button className="btn btn-unfollow"
                        onClick={handleUnFollow}>
                        <i class="far fa-heart"></i> {t('UnSave')} 
                    </button>
                    : <button className="btn btn-follow"
                        onClick={handleFollow} disabled={auth.isCompany}>
                        <i class="far fa-heart"></i> Save Job
                    </button>
            }
        </>
    )
}

export default FollowCompanyBtn
