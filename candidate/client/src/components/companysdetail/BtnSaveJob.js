import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { followJob, unFollowJob } from '../../redux/actions/profileCompanyAction'
import './CompanysDetail.scss'


const BtnSaveJob = ({ job }) => {
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
                    ? <div className="col-sm-3 btn-2 text-center">
                        <button type="button" onClick={handleUnFollow} className="btn btn-unsave mt-2"><i class="far fa-heart"></i> Unsave</button>
                    </div>
                    : <div className="col-sm-3 btn-2 text-center">
                        <button type="button" onClick={handleFollow} className="btn btn-save mt-2" disabled={auth.isCompany}><i class="far fa-heart"></i> Save</button>
                    </div>
            }
        </>
    )
}

export default BtnSaveJob
