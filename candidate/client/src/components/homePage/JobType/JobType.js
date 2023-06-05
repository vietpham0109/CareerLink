import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './JobType.scss';
import { useTranslation } from "react-i18next";
import { postDataAPI } from '../../../utils/fetchData';

const JobType = () => {
    const { t } = useTranslation();
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await postDataAPI("get-all-job")
                setJobs(res.data.jobs)
            } catch (error) {

            }
        }
        fetchData()
    }, [])

    return (
        <div className="job-best mt-5">
            <div className="container">
                <h2 className="text-center">{t('TheNewJobs')}</h2>
                <h2 className="text-center text-2"></h2>
                <div className="row">
                    <div className="col-sm-4 mt-3">
                        <div className="job-box card">
                            <div className="text-title text-uppercase card-header">
                                <i className="far fa-clock"></i>{t('Intership')}
                            </div>
                            <div className="list-job card-body">
                                {
                                    jobs.map((element, index) => {
                                        if (element.employment_type === 'Intership')
                                            return (
                                                <div key={index}>
                                                    <div className="job-over-item row">
                                                        <div className="col-3">
                                                            <img src={element.company_info?.logo} alt='' />
                                                        </div>
                                                        <div className="col-9">
                                                            <div className="name-job">
                                                                <Link to={`/jobdetail/${element._id}`}>
                                                                    <span title={element.job_title}>{element.job_title}</span>
                                                                </Link>
                                                            </div>
                                                            <div className="name-company">
                                                                <Link to={`/companydetail/${element.idCompany}`}>
                                                                    <span title={element.companyName}>{element.companyName}</span>
                                                                </Link>
                                                            </div>
                                                            <div className="row job-info">
                                                                <div className="salary col-6">
                                                                    <i className="fas fa-dollar-sign"></i>
                                                                    {
                                                                        element.salary?.money_type === 'USD' ?
                                                                            <span>{element.salary?.min}-{element.salary?.max} USD</span> :
                                                                            <span>{element.salary?.min / 1000000}-{element.salary?.max / 1000000} M</span>
                                                                    }
                                                                </div>
                                                                <div title={element.address} className="location col-6">
                                                                    <i className="fas fa-map-marker-alt"></i>{element.address}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                </div>
                                            )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-3">
                        <div className="job-box card">
                            <div className="text-title text-uppercase card-header">
                                <i className="fas fa-stopwatch"></i>{t('Parttime')}
                            </div>
                            <div className="list-job card-body">
                                {
                                    jobs.map((element, index) => {
                                        if (element.employment_type === 'Part-time')
                                            return (
                                                <div key={index}>
                                                    <div className="job-over-item row">
                                                        <div className="col-3">
                                                            <img src={element.company_info?.logo} alt='' />
                                                        </div>
                                                        <div className="col-9">
                                                            <div className="name-job">
                                                                <Link to={`/jobdetail/${element._id}`}>
                                                                    <span title={element.job_title}>{element.job_title}</span>
                                                                </Link>
                                                            </div>
                                                            <div className="name-company">
                                                                <Link to={`/companydetail/${element.idCompany}`}>
                                                                    <span title={element.companyName}>{element.companyName}</span>
                                                                </Link>
                                                            </div>
                                                            <div className="row job-info">
                                                                <div className="salary col-6">
                                                                    <i className="fas fa-dollar-sign"></i>
                                                                    {
                                                                        element.salary?.money_type === 'USD' ?
                                                                            <span>{element.salary?.min}-{element.salary?.max} USD</span> :
                                                                            <span>{element.salary?.min / 1000000}-{element.salary?.max / 1000000} M</span>
                                                                    }
                                                                </div>
                                                                <div title={element.address} className="location col-6">
                                                                    <i className="fas fa-map-marker-alt"></i>{element.address}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                </div>
                                            )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-3">
                        <div className="job-box card">
                            <div className="text-title text-uppercase card-header">
                                <i className="fas fa-stopwatch"></i>Full-time
                            </div>
                            <div className="list-job card-body">
                                {
                                    jobs.map((element, index) => {
                                        if (element.employment_type === 'Full-time')
                                            return (
                                                <div key={index}>
                                                    <div className="job-over-item row">
                                                        <div className="col-3">
                                                            <img src={element.company_info?.logo} alt='' />
                                                        </div>
                                                        <div className="col-9">
                                                            <div className="name-job">
                                                                <Link to={`/jobdetail/${element._id}`}>
                                                                    <span title={element.job_title}>{element.job_title}</span>
                                                                </Link>
                                                            </div>
                                                            <div className="name-company">
                                                                <Link to={`/companydetail/${element.idCompany}`}>
                                                                    <span title={element.companyName}>{element.companyName}</span>
                                                                </Link>
                                                            </div>
                                                            <div className="row job-info">
                                                                <div className="salary col-6">
                                                                    <i className="fas fa-dollar-sign"></i>
                                                                    {
                                                                        element.salary?.money_type === 'USD' ?
                                                                            <span>{element.salary?.min}-{element.salary?.max} USD</span> :
                                                                            <span>{element.salary?.min / 1000000}-{element.salary?.max / 1000000} M</span>
                                                                    }
                                                                </div>
                                                                <div title={element.address} className="location col-6">
                                                                    <i className="fas fa-map-marker-alt"></i>{element.address}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                </div>
                                            )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default JobType;