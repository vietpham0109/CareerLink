import moment from 'moment'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NoNotice from '../images/notice.png'
import { deleteAllNotifies, isReadNotify, NOTIFY_TYPES } from '../redux/actions/notifyAction'
import Avatar from './Avatar'
import { useTranslation } from "react-i18next";
import { Modal } from 'antd';

const NotifyModal = () => {
    const { t } = useTranslation();
    const { auth, notify } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleIsRead = (msg) => {
        dispatch(isReadNotify({ msg, auth }))
    }

    const handleSound = () => {
        dispatch({ type: NOTIFY_TYPES.UPDATE_SOUND, payload: !notify.sound })
    }

    const handleDeleteAll = () => {
        const newArr = notify.data.filter(item => item.isRead === false)
        if (newArr.length === 0) return dispatch(deleteAllNotifies(auth.token))

        setVisible(true)
    }

    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            dispatch(deleteAllNotifies(auth.token))
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const arr2 = notify.data.filter(item => item.isRead === false)


    return (
        <>
            <Modal
                title="Delete all notification"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>
                    {
                        ` ${t('Youhave')} ${arr2.length} ${t('unreadnoticesAreyousureyouwanttodeleteall')}`
                    }
                </p>
            </Modal>

            <div style={{ minWidth: '300px' }}>
                <div className="d-flex justify-content-between align-items-center px-3">
                    <h3> {t('Notification')} </h3>
                    {
                        notify.sound
                            ? <i className="fas fa-bell text-danger"
                                style={{ fontSize: '1.2rem', cursor: 'pointer' }}
                                onClick={handleSound} />

                            : <i className="fas fa-bell-slash text-danger"
                                style={{ fontSize: '1.2rem', cursor: 'pointer' }}
                                onClick={handleSound} />
                    }
                </div>
                <hr className="mt-0" />

                {
                    notify.data.length === 0 &&
                    <img src={NoNotice} alt="NoNotice" className="w-100" />
                }

                <div style={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}>
                    {
                        notify.data.map((msg, index) => (
                            <div key={index} className="px-2 mb-3" >
                                <Link to={`${msg.url}`} className="d-flex text-dark align-items-center notification-1"
                                    onClick={() => handleIsRead(msg)}>
                                    <div>
                                        <Avatar src={msg.user.avatar} size="big-avatar" />
                                    </div>

                                    <div className="mx-1 flex-fill">
                                        <div>

                                            <strong className="mr-1">{msg.fullname ? msg.fullname : msg.user.fullname}</strong>

                                            <span>{msg.text}</span>
                                        </div>
                                        {msg.content && <small>{msg.content.slice(0, 20)}...</small>}
                                    </div>

                                    {
                                        msg.image &&
                                        <div style={{ width: '30px' }}>
                                            {
                                                msg.image.match(/video/i)
                                                    ? <video src={msg.image} width="100%" />
                                                    : <Avatar src={msg.image} size="medium-avatar" />
                                            }
                                        </div>
                                    }

                                </Link>
                                <small className="text-muted d-flex justify-content-between px-2">
                                    {moment(msg.createdAt).fromNow()}
                                    {
                                        !msg.isRead && <i className="fas fa-circle text-primary" />
                                    }
                                </small>
                            </div>
                        ))
                    }

                </div>

                <hr className="my-1" />
                <div className="text-right text-danger mr-2" style={{ cursor: 'pointer' }}
                    onClick={handleDeleteAll}>
                    {t('DeleteAll')}
                </div>

            </div>
        </>
    )
}

export default NotifyModal
