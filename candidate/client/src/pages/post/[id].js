import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPost } from '../../redux/actions/postAction'
import LoadIcon from '../../images/loading.gif'
import PostCard from '../../components/PostCard'
import RightSideBar from '../../components/home/RightSideBar'

const Post = () => {
    const { id } = useParams()
    const [post, setPost] = useState([])
    let scroll = 0;
    const { auth, detailPost } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPost({ detailPost, id, auth }))

        if (detailPost.length > 0) {
            const newArr = detailPost.filter(post => post._id === id)
            setPost(newArr)
        }
    }, [detailPost, dispatch, id, auth])
    
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: scroll, behavior: 'smooth' })
        }, 100)
    }, [])

    return (
        <div className="posts container">
            <div className='row'>
                <div className='col-md-7 offset-md-1'>
                    {
                        post.length === 0 &&
                        <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                    }

                    {
                        post.map(item => (
                            <PostCard key={item._id} post={item} />
                        ))
                    }
                </div>
                <div className='col-md-4'>
                    <RightSideBar />
                </div>
            </div>
        </div>
    )
}

export default Post
