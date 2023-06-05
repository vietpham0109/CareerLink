import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JobsComponent from '../../components/jobs/JobsComponent';
import SearchJob from '../../components/jobs/SearchJob';
import './job.scss';
import { postDataAPI } from '../../utils/fetchData'
import { useTranslation } from "react-i18next";
import { Pagination } from 'antd';
import { useSelector } from 'react-redux';

const limit = 10

const Job = () => {
    const { t } = useTranslation();

    const [dataShow, setDataShow] = useState([])
    const [total, setTotal] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)

    const { auth, allJob } = useSelector(state => state)


    useEffect(() => {
        if (allJob.length > 0) {
            setTotal(allJob.length)
            setDataShow([...allJob])
            return;
        }
        const fetchData = async () => {
            try {
                const res = await postDataAPI(`get-all-job?limit=${limit}&page=${currentPage}`)
                setDataShow(res.data.jobs)
                setTotal(res.data.total)
            } catch (error) {
            }
        }
        fetchData();
    }, [currentPage, allJob])

    return (
        <div className="job-view mb-5" onLoad={window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <SearchJob />
            <div className="container">
                <div className="mt-3 text-1">
                    <Link to={`${!auth.isCompany ? '/' : '/company'}`}>{t('Home')} /</Link><span> {t('Jobs')}</span>
                </div>
                <div className="job-content mt-3 card">
                    <div className="card-body">
                        {allJob.length > 0 && <h3>{t('Found')} <span>{total}</span> {t('matchingjobs')}</h3>}
                        {/* <h3>{t('Found')} <span>{total}</span> {t('matchingjobs')}</h3> */}
                        <div className="row">
                            <div className="job-list card-body">
                                {
                                    dataShow.map((item, index) => (
                                        <>
                                            <div className="job-list-li row" key={index}>
                                                <JobsComponent dataJob={item} />
                                            </div>
                                            <hr />
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="table__pagination">
                            <Pagination defaultCurrent={currentPage} pageSize={limit} onChange={e => setCurrentPage(e)} total={total} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Job;