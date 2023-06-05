import React, { useState, useEffect } from 'react'
import LoadIcon from '../../images/loading.gif'
import LoadMoreBtn from '../LoadMoreBtn'
import { getDataAPI } from '../../utils/fetchData'
import { PROFILE_TYPES } from '../../redux/actions/profileAction'
import PostCard from '../PostCard'
import { Result } from 'antd';

const Posts = ({ auth, id, dispatch, profile }) => {
    const [posts, setPosts] = useState([])
    const [result, setResult] = useState(9)
    const [page, setPage] = useState(0)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        profile.posts.forEach(data => {
            if (data._id === id) {
                setPosts(data.posts)
                setResult(data.result)
                setPage(data.page)
            }
        })
    }, [profile.posts, id, auth, dispatch])
    const theme = ''

    const handleLoadMore = async () => {
        setLoad(true)
        const res = await getDataAPI(`user_posts/${id}?limit=${page * 9}`, auth.token)
        dispatch({ type: PROFILE_TYPES.GET_POSTS, payload: { ...res.data, page: page + 1, _id: id } })
        setLoad(false)
    }

    if (result === 0) return <Result extra={<h2 className="text-center text-danger">No Post</h2>} />

    return (

        <div className='posts'>
            {
                posts.map(post => (
                    <PostCard key={post._id} post={post} theme={theme} />
                ))
            }
            {
                load && <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
            }
            <LoadMoreBtn result={result} page={page}
                load={load} handleLoadMore={handleLoadMore} />
        </div>

    )
}

export default Posts
