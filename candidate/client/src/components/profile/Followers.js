import React from 'react'
import UserCard from '../UserCard'
import FollowBtn from '../FollowBtn'
import { useSelector } from 'react-redux'

const Followers = ({ users }) => {
    const { auth } = useSelector(state => state)
    return (

        <div className="follower-content">
            <div className='row'>
                {
                    users.map(user => (
                        <div className='col-sm-6 mb-2'>
                            <div className='card' style={{ borderRadius: '15px', boxShadow: 'none' }}>
                                <div className='card-body'>
                                    <UserCard key={user._id} user={user} >
                                        {
                                            auth.user._id !== user._id && <FollowBtn user={user} />
                                        }
                                    </UserCard>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default Followers
