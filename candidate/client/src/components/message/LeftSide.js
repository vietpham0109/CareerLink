import React, { useState, useEffect, useRef } from 'react'
import UserCard from '../UserCard'
import { useSelector, useDispatch } from 'react-redux'
import { getDataAPI } from '../../utils/fetchData'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { useHistory, useParams } from 'react-router-dom'
import { MESS_TYPES, getConversations } from '../../redux/actions/messageAction'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next'

const LeftSide = () => {
    const { auth, message, online } = useSelector(state => state)
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const [search, setSearch] = useState('')
    const [searchUsers, setSearchUsers] = useState([])

    const history = useHistory()
    const { id } = useParams()

    const pageEnd = useRef()
    const [page, setPage] = useState(0)


    const handleSearch = async e => {
        e.preventDefault()
        if (!search) return setSearchUsers([]);
        let rs = search.toLowerCase().replace(/ /g, '')
        try {
            const res = await getDataAPI(`search?username=${rs}`, auth.token)
            setSearchUsers(res.data.users)
        } catch (err) {
            dispatch({
                type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg }
            })
        }
    }

    const handleAddUser = (user) => {
        setSearch('')
        setSearchUsers([])
        dispatch({ type: MESS_TYPES.ADD_USER, payload: { ...user, text: '', media: [] } })
        dispatch({ type: MESS_TYPES.CHECK_ONLINE_OFFLINE, payload: online })
        if (!auth.isCompany)
            return history.push(`/message/${user._id}`)
        else
            return history.push(`/company/message/${user._id}`)
    }

    const isActive = (user) => {
        if (id === user._id) return 'active';
        return ''
    }

    useEffect(() => {
        if (message.firstLoad) return;
        dispatch(getConversations({ auth }))
    }, [dispatch, auth, message.firstLoad])

    // Load More
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPage(p => p + 1)
            }
        }, {
            threshold: 0.1
        })

        observer.observe(pageEnd.current)
    }, [setPage])

    useEffect(() => {
        if (message.resultUsers >= (page - 1) * 9 && page > 1) {
            dispatch(getConversations({ auth, page }))
        }
    }, [message.resultUsers, page, auth, dispatch])


    // Check User Online - Offline
    useEffect(() => {
        if (message.firstLoad) {
            dispatch({ type: MESS_TYPES.CHECK_ONLINE_OFFLINE, payload: online })
        }
    }, [online, message.firstLoad, dispatch])

    return (
        <>
            <div className='header-left'>
                <span>Messages</span>
                <i className="far fa-edit"></i>
            </div>
            <form className="message_header-1" onSubmit={handleSearch} >
                <Input size="large" placeholder="  Search..."
                    prefix={<SearchOutlined />}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button type="submit" style={{ display: 'none' }}>Search</button>
            </form>

            <div className="message_chat_list">
                {
                    searchUsers.length !== 0
                        ? <>
                            {
                                searchUsers.map(user => (
                                    <div key={user._id} className={`message_user ${isActive(user)}`}
                                        onClick={() => handleAddUser(user)}>
                                        <UserCard user={user} />
                                    </div>
                                ))
                            }

                        </>
                        : <>
                            {
                                message.users.map(user => (
                                    <div key={user._id} className={`message_user ${isActive(user)}`}
                                        onClick={() => handleAddUser(user)}>
                                        <UserCard user={user} msg={true}>
                                            {
                                                user.online
                                                    ? <i className="fas fa-circle text-success" />
                                                    : auth.user.following.find(item =>
                                                        item._id === user._id
                                                    ) && <i className="fas fa-circle" />

                                            }

                                        </UserCard>
                                    </div>
                                ))
                            }
                        </>
                }
                <button ref={pageEnd} style={{ opacity: 0, display: 'none' }} >Load More</button>
            </div>
        </>
    )
}

export default LeftSide
