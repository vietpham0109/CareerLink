import dateFormat from 'dateformat'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './AppliedJob.scss'
import { unSubmit } from '../../redux/actions/sumitedAction'
import { useTranslation } from "react-i18next";
import { getDataAPI } from '../../utils/fetchData'

const AppliedJob = () => {
    const { t } = useTranslation();
    const { auth } = useSelector(state => state)
    const [dataJob, setDataJob] = useState([])
    const dispatch = useDispatch()

    const fetchData = async () => {
        try {
            const res = await getDataAPI("get_submited", auth.token)
            setDataJob(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = (idJob) => {
        dispatch(unSubmit(idJob, auth))
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="applied-job-view container mb-5" onLoad={window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <h3 className="text-center mt-3"> {t('ManageAppliedJobs')} </h3>
            <div className="applied-job-content card mt-3">
                <div className="card-body">
                    {
                        dataJob.map((element, index) => (
                            <div className="applied-job-list" key={index}>
                                <div className="list-jobs">
                                    <div className="row">
                                        <div className="col-sm-9">
                                            <div className="name-job">
                                                <Link to={`/jobdetail/${element.idJob?._id}`}><span>{element.idJob?.job_title}</span></Link>
                                            </div>
                                            <div className="name-company">
                                                <Link to={`/companydetail/${element.idJob?.company_info?.idCompany}`}><span >{element.idJob?.company_info?.companyName}</span></Link>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <span className="font-weight-bold"> {t('Status')} : </span><span style={{ color: 'green' }}>{element.cv?.map(element => { if (element.idCandidate === auth.user?._id) return element.status })}</span>
                                                </div>
                                                <div className="col-sm-4">
                                                    <span className="font-weight-bold"> {t('Appliedon')} : </span><span>{dateFormat(element.dateSubmit, 'dd/mm/yyyy')}</span>
                                                </div>
                                                <div className="col-sm-4">
                                                    <span className="font-weight-bold text-danger"> {t('Expired')}  </span><span> {dateFormat(element.endDate, 'dd/mm/yyyy')}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="btn-applied-job mt-3">
                                                <button type="button" className="btn btn-applied-job-1" onClick={e => handleDelete(element.idJob?._id)}><i className="far fa-trash-alt"></i> {t('Delete')} </button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default AppliedJob
