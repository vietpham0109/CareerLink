import React from 'react'
import Avatar from '../../Avatar'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { GLOBALTYPES } from '../../../redux/actions/globalTypes'
import { deletePost } from '../../../redux/actions/postAction'
import { BASE_URL } from '../../../utils/config'
import { useTranslation } from "react-i18next";
import { Modal, message, Popover } from 'antd';

const CardHeader = ({ post }) => {
    const { t } = useTranslation();
    const { auth, socket } = useSelector(state => state)
    const dispatch = useDispatch()

    const history = useHistory()

    const handleEditPost = () => {
        dispatch({ type: GLOBALTYPES.STATUS, payload: { ...post, onEdit: true } })
    }

    const handleDeletePost = () => {
        setVisible(true);
    }

    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            dispatch(deletePost({ post, auth, socket }))
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${BASE_URL}/post/${post._id}`)
        message.success({
            content: 'Copy Link Success',
        });
    }

    return (
        <>
            <Modal
                title="Delete this post?"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>Are you sure want to delete this post?</p>
            </Modal>

            <div className="card_header">
                <div className="d-flex">
                    <Avatar src={post.user.avatar} size="big-avatar" />

                    <div className="card_name ml-2">
                        <h6 className="m-0">
                            <Link to={`${!auth.isCompany ? '' : '/company'}/profile/${post.user._id}`} className="text-dark">
                                {post.user.firstname + ' ' + post.user.lastname + ' '}
                                {
                                    post.user.role !== 'candidate' &&
                                    <Popover placement="right" content='JobLibrary have verified this is company'>
                                        <i className="fas fa-check-circle text-primary"></i>
                                    </Popover>
                                }
                            </Link>
                        </h6>
                        <small className="text-muted">
                            {moment(post.createdAt).fromNow()}
                        </small>
                    </div>
                </div>

                <div className="nav-item dropdown">
                    <span className="material-icons" id="moreLink" data-toggle="dropdown">
                        more_horiz
                    </span>

                    <div className="dropdown-menu">
                        {
                            auth.user._id === post.user._id &&
                            <>
                                <div className="dropdown-item" onClick={handleEditPost}>
                                    <span className="material-icons mr-1">create</span> {t('EditPost')}
                                </div>
                                <div className="dropdown-item" onClick={handleDeletePost} >
                                    <span className="material-icons mr-1">delete_outline</span> {t('DeletePost')}
                                </div>
                            </>
                        }
                        {
                            auth.user._id !== post.user._id &&
                            <div className="dropdown-item">
                                <span className="material-icons mr-1">report</span> Report Post
                            </div>
                        }
                        <div className="dropdown-item" onClick={handleCopyLink}>
                            <span className="material-icons mr-1">content_copy</span> {t('CopyLink')}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardHeader
