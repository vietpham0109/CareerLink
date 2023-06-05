import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Posts from '../components/home/Posts'
import RightSideBar from '../components/home/RightSideBar'
import Status from '../components/home/Status'
import LoadIcon from '../images/loading.gif'
import LeftSideBar from '../components/home/LeftSideBar'
import logo from '../images/logo-2121.png'
import { useTranslation } from "react-i18next";
import Search from '../components/home/Search'

const JobFeed = () => {
    const { t } = useTranslation();

    const { homePosts } = useSelector(state => state)
    
    let scroll = 0;
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: scroll, behavior: 'smooth' })
        }, 100)
    }, [])

    return (
        <>
            <div className='card search-feed'>
                <div className='row'>
                    <div className='col-md-1'>
                        <img src={logo} alt='logo' style={{height: '45px', width: '110px'}}/>
                    </div>
                    <div className='col-md-2'>
                        <Search />
                    </div>
                    <div className='col-md-6 text-center' style={{ fontSize: '27px' }}>
                        <i className="fas fa-home mr-5" style={{ color: '#005ca3' }}></i>
                        <i className="fab fa-facebook-messenger" style={{ color: '#007bff' }}></i>
                        <i className="fas fa-plus-square ml-5" style={{ color: '#e55959' }}></i>
                    </div>

                </div>
            </div>
            <div className="home row mx-0">
                <div className="col-md-3" style={{ position: 'fixed' }}>
                    <LeftSideBar />
                </div>
                <div className='col-md-3' style={{height: '100vh', zIndex: '-1'}}>

                </div>
                <div className="col-md-6">
                    <div className='container'>
                        <Status />
                        {
                            homePosts.loading
                                ? <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
                                : (homePosts.result === 0 && homePosts.posts.length === 0)
                                    ? <h2 className="text-center">{t('NoPost')}</h2>
                                    : <Posts />
                        }
                    </div>
                </div>
                <div className="col-md-3" style={{ position: 'fixed', right: '0', overflowY: 'auto', height: '80%' }}>
                    <RightSideBar />
                </div>
            </div>
        </>

    )
}

export default JobFeed
