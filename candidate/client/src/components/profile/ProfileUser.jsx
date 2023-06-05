import React, { useState, useEffect } from 'react'
import { Avatar, Image, Popover, Button, Tabs } from 'antd';
import Posts from './Posts';
import Status from '../home/Status';
import Followers from './Followers';
import Following from './Following';
import FollowBtn from '../FollowBtn'
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';
import EditProfileCompany from './EditProfileCompany';
import Saved from './Saved';
import { useTranslation } from "react-i18next";
import { MESS_TYPES } from '../../redux/actions/messageAction'
import {
    UserOutlined, FireOutlined,
    UsergroupDeleteOutlined,
    UsergroupAddOutlined,
    SettingOutlined,
    EditOutlined,
    KeyOutlined, BookOutlined
}
    from '@ant-design/icons'
import { useHistory } from 'react-router-dom';

const { TabPane } = Tabs;

function ProfileUser({ id, auth, profile, dispatch }) {
    const { t } = useTranslation();

    const [userData, setUserData] = useState([])

    useEffect(() => {
        if (id === auth.user._id) {
            setUserData([auth.user])
        } else {
            const newData = profile.users.filter(user => user._id === id)
            setUserData(newData)
        }
    }, [id, auth, dispatch, profile.users])

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 100)
    }, [])

    const history = useHistory()


    const handleAddUser = (user) => {
        dispatch({ type: MESS_TYPES.ADD_USER, payload: { ...user, text: '', media: [] } })
        if (!auth.isCompany)
            return history.push(`/message/${user._id}`)
        else
            return history.push(`/company/message/${user._id}`)
    }

    return (
        <div className='mt-5'>
            {
                userData.map(user => (
                    <div className='content-profile-1'>
                        <div className='card header-profile' key={user._id}>
                            <div className='avatar-profile'>
                                <Avatar size={120}
                                    src={<Image src={user.avatar} style={{ width: 120, height: 120 }} />}
                                />
                                <span className='name-user'>{user.firstname + ' ' + user.lastname + ' '}
                                    {
                                        user.role === 'company' &&
                                        <Popover placement="topLeft" content='JobLibrary have verified this is company'>
                                            <i className="fas fa-check-circle text-primary"></i>
                                        </Popover>
                                    }
                                    &emsp;
                                    {
                                        user._id !== auth.user._id &&
                                        <>
                                            <FollowBtn user={user} />
                                            <Button type="primary" className='message-profile'
                                                onClick={() => handleAddUser(user)}>Message
                                            </Button>
                                        </>
                                    }
                                </span>
                            </div>

                            <div className='tab-color'></div>
                        </div>
                        <div className='tab-profile'>
                            <Tabs defaultActiveKey='1' >
                                <TabPane tab={<span><UserOutlined />Profile</span>} key="1">
                                    <div className='row mt-1'>
                                        <div className='col-4' style={{ marginTop: '15px' }}>
                                            <div className='card' style={{ borderRadius: '15px' }}>
                                                <div className='follow-card'>
                                                    <div className='followers-content'>
                                                        <h2>{user.followers.length}</h2>
                                                        <span>{t('Followers')}</span>
                                                    </div>
                                                    <hr style={{ height: '60px', width: '1px', background: 'rgb(99, 115, 129)' }} />
                                                    <div className='following-content'>
                                                        <h2> {user.following.length}</h2>
                                                        <span>{t('Following')}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card mt-4 profile-about' style={{ borderRadius: '15px' }}>
                                                <div className='card-body'>
                                                    <h5>{t('About')}</h5>
                                                    <div className='text-center'
                                                    style={{marginBottom:'30px'}}
                                                    ><span>{user.introduction}</span></div>
                                                    <div><i className="fas fa-map-marker-alt"></i><span>{user.address}</span></div>
                                                    <div><i className="fas fa-envelope"></i><span>{user.email}</span></div>
                                                    <div><i className="fas fa-phone"></i><span>{user.mobile}</span></div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-8'>
                                            <Status />
                                            <Posts auth={auth} profile={profile} dispatch={dispatch} id={id} />
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab={<span><FireOutlined />{t('Follow')}</span>} key="2">
                                    <div className='card' style={{ borderRadius: '15px', marginTop: '15px' }}>
                                        <div className='card-body card-follow'>
                                            <Tabs defaultActiveKey="4" size='large'>
                                                <TabPane tab={<span><UsergroupDeleteOutlined />Followers</span>} key="4">
                                                    <Followers users={user.followers} />
                                                </TabPane>
                                                <TabPane tab={<span><UsergroupAddOutlined />Following</span>} key="5">
                                                    <Following users={user.following} />
                                                </TabPane>
                                            </Tabs>
                                        </div>
                                    </div>
                                </TabPane>
                                {
                                    user._id === auth.user._id &&
                                    <TabPane tab={<span><BookOutlined />Saved</span>} key="103">
                                        <div className='row mt-1'>
                                            <div className='col-4' style={{ marginTop: '15px' }}>
                                                <div className='card' style={{ borderRadius: '15px' }}>
                                                    <div className='follow-card'>
                                                        <div className='followers-content'>
                                                            <h2>{user.followers.length}</h2>
                                                            <span>Followers</span>
                                                        </div>
                                                        <hr style={{ height: '60px', width: '1px', background: 'rgb(99, 115, 129)' }} />
                                                        <div className='following-content'>
                                                            <h2> {user.following.length}</h2>
                                                            <span>Following</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='card mt-4 profile-about' style={{ borderRadius: '15px' }}>
                                                    <div className='card-body'>
                                                        <h5>About</h5>
                                                        <div><span>{user.about}</span></div>
                                                        <div><i className="fas fa-map-marker-alt"></i><span>{user.address}</span></div>
                                                        <div><i className="fas fa-envelope"></i><span>{user.email}</span></div>
                                                        <div><i className="fas fa-phone"></i><span>{user.mobile}</span></div>
                                                        <div><i className="fas fa-venus-mars"></i><span>{user.gender}</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-8'>
                                                <Saved auth={auth} dispatch={dispatch} />
                                            </div>
                                        </div>
                                    </TabPane>
                                }
                                {
                                    user._id === auth.user._id &&
                                    <TabPane tab={<span><SettingOutlined />Setting</span>} key="3">
                                        <div className='card' style={{ borderRadius: '15px', marginTop: '15px' }}>
                                            <div className='card-body card-setting'>
                                                <Tabs defaultActiveKey="6" size='large'>
                                                    <TabPane tab={<span><EditOutlined />Edit Profile</span>} key="6">
                                                        <EditProfile />
                                                    </TabPane>
                                                    {
                                                        auth.isCompany &&
                                                        <TabPane tab={<span><KeyOutlined />Edit Contact Company</span>} key="8">
                                                            <EditProfileCompany />
                                                        </TabPane>
                                                    }
                                                    <TabPane tab={<span><KeyOutlined />Change Password</span>} key="7">
                                                        <ChangePassword />
                                                    </TabPane>
                                                </Tabs>
                                            </div>
                                        </div>
                                    </TabPane>
                                }
                            </Tabs>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ProfileUser