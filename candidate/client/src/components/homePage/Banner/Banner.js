import React, { useState, useEffect } from 'react';
import './Banner.scss'
import { Carousel } from 'antd';
import b1 from '../../../images/banner/b1.jpg'
import b2 from '../../../images/banner/b2.jpg'
import b3 from '../../../images/banner/b3.jpg'
import b4 from '../../../images/banner/b4.jpg'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import { searchJob } from '../../../redux/actions/listJobAction';


const Banner = () => {
    const { t } = useTranslation();
    const [search, setSearch] = useState("")
    const { auth, allJob } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleChange = (e) => {
        const { value } = e.target;
        setSearch(value)
    }
    const handleSearch = () => {
        dispatch(searchJob({ search, token: auth.token }))
    }

    useEffect(() => {
        if (allJob.length > 0 && search) {
            history.push('/jobs')
        }
    }, [allJob])

    return (
        <>
            <div>
                <Carousel autoplay effect="fade">
                    <div className='b1'>
                        <img src={b2} alt="banner" />
                    </div>
                    <div className='b1'>
                        <img src={b4} alt="banner" />
                    </div>
                    <div className='b1'>
                        <img src={b3} alt="banner" />
                    </div>
                    <div className='b1'>
                        <img src={b1} alt="banner" />
                    </div>
                </Carousel>
                <div className='card searach-banner'>
                    <div style={{ padding: '35px 45px 0px' }}>
                        <span className='name-1'>{t('Graspyoursuccesswith')}</span> <br />
                        <span className='name-2'>{t('careeropportunities')}</span>
                        <Input size="large" placeholder="Job title, Skill, Company name" prefix={<SearchOutlined />}
                            style={{ height: '43px', margin: '10px 0 20px' }}
                            onChange={handleChange}
                        />
                        <button onClick={handleSearch} className='btn btn-search-1'>{t('SEARCHJOB')}</button>
                    </div>
                    <div className='upload-resume'>
                        <span className='name-3'>{t('Uploadyourresumeforquickapply')}</span>
                        <button className='btn btn-upload-2'>{t('UPLOADNOW')}</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;