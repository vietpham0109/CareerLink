import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { followJob, unFollowJob,  } from '../../redux/actions/profileCompanyAction'




const FollowCompanyBtn = ({ job }) => {
    const [followed, setFollowed] = useState(false)

    const { auth, profile, socket } = useSelector(state => state)
    const dispatch = useDispatch()



    const [load, setLoad] = useState(false)



    useEffect(() => {

        if (auth.user.followJob.find(item => item === job._id)) {
            return setFollowed(true)
        }

        return () => setFollowed(false)
    }, [auth.user.followJob, dispatch])

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
                    ? <button type="button" class="btn btn-right" onClick={handleUnFollow}><i class="far fa-heart"></i>Đã lưu</button>
                    : <button type="button" class="btn btn-right" onClick={handleFollow}><i class="far fa-heart"></i>Lưu</button>
            }
        </>
    )
}

export default FollowCompanyBtn
