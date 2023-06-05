import dateFormat from 'dateformat'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import FollowCompanyBtn from '../FollowJobBtn'
import SearchJob from '../jobs/SearchJob'
import SubmitCVModal from '../submitcvmodal/SubmitCVModal'
import './JobsDetail.scss'
import ShareModal from '../ShareModal'
import { BASE_URL } from '../../utils/config'
import { getDataAPI } from '../../utils/fetchData'

const JobsDetail = () => {


    const { id } = useParams()
    const [job, setJob] = useState({})
    const [ShowSubmitCV, setShowSubmitCV] = useState(false)

    const { allJob, auth } = useSelector(state => state)
    const [typeShare, setTypeShare] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getDataAPI(`get-job/${id}`)
                setJob(res.data)
            } catch (error) {
                setJob({})
            }
        }
        fetchData()
    }, [id, auth.token, allJob])


    return (
        <div className="job-detail-view mb-5" onLoad={window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <SearchJob />
            <div className="container">
                <div className="mt-3 text-1">
                    <Link to={`${!auth.isCompany ? '/' : '/company'}`}>Home</Link><span> / </span><Link to={`${!auth.isCompany ? '' : '/company'}/jobs`}>Jobs</Link><span> / {job.job_title}</span>
                </div>
                <div className="card mt-3 job-content">
                    <div className="card-body">
                        <h3 className="card-title">{job.job_title}</h3>
                        <div className="name-company mb-2">
                            <Link title={job.companyName} to={`/companydetail/${job.idUser}`}>{job.company_info?.companyName}</Link>
                        </div>

                        <div className="row">
                            <div className="col-sm-8">
                                <div className="card job-content-2">
                                    <div className="card-body row">
                                        <div className="col-sm-6">
                                            <div className="content-detail">
                                                <div className="icon-left">
                                                    <i className="fas fa-dollar-sign"></i>
                                                </div>
                                                <div className="info-detail">
                                                    <span className="title-3">Salary:</span>
                                                    <span>{job.salary?.money_type === 'VND' ? job.salary?.min / 1000000 + ' - ' + job.salary?.max / 1000000 + 'M' : job.salary?.min + ' - ' + job.salary?.max} {job.salary?.money_type}</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="content-detail">
                                                <div className="icon-left">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                                <div className="info-detail">
                                                    <span className="title-3">Address:</span>
                                                    <span title={job.address} className='address-1'>{job.address}</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="content-detail">
                                                <div className="icon-left">
                                                    <i className="fas fa-user"></i>
                                                </div>
                                                <div className="info-detail">
                                                    <span className="title-3">Level:</span>
                                                    <span>{job.level}</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="content-detail">
                                                <div className="icon-left">
                                                    <i className="far fa-id-card"></i>
                                                </div>
                                                <div className="info-detail">
                                                    <span className="title-3">Job type:</span>
                                                    <span>{job.employment_type}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="content-detail">
                                                <div className="icon-left">
                                                    <i className="fas fa-bars"></i>
                                                </div>
                                                <div className="info-detail">
                                                    <span className="title-3">Job Category:</span>
                                                    <span>{job.industry?.title}</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="content-detail">
                                                <div className="icon-left">
                                                    <i className="fas fa-briefcase"></i>
                                                </div>
                                                <div className="info-detail">
                                                    <span className="title-3">Exp requirements:</span>
                                                    {job.working_experience?.isRequired ? <span>{job.working_experience?.from} - {job.working_experience?.to} years</span> : <span>Not require</span>}

                                                </div>
                                            </div>
                                            <hr />
                                            <div className="content-detail">
                                                <div className="icon-left">
                                                    <i className="far fa-clock"></i>
                                                </div>
                                                <div className="info-detail">
                                                    <span className="title-3">Date created:</span>
                                                    <span>{dateFormat(job.createdAt, 'dd/mm/yyyy')}</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="content-detail">
                                                <div className="icon-left">
                                                    <i className="far fa-clock"></i>
                                                </div>
                                                <div className="info-detail">
                                                    <span className="title-3">Expires on:</span>
                                                    <span>{dateFormat(job.expiring_date, 'dd/mm/yyyy')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">

                                <div className="job-btn">
                                    {
                                        !auth.isCompany &&
                                        <>
                                            <button type="button" className="btn btn-info btn-lg mb-3" onClick={() => setShowSubmitCV(true)}><i className="far fa-paper-plane"></i> APPLY NOW</button>
                                            {
                                                ShowSubmitCV &&
                                                <SubmitCVModal
                                                    setShowSubmitCV={setShowSubmitCV}
                                                    job={job} />
                                            }
                                            <FollowCompanyBtn job={job} />
                                        </>
                                    }
                                    <button type="button" className="btn btn-secondary btn-lg mt-3" onClick={() => setTypeShare(!typeShare)}><i className="fas fa-share-alt"></i> Share Job</button>
                                    <div className="item-share" style={{ display: `${typeShare ? 'block' : 'none'}` }}>
                                        <ShareModal url={`${BASE_URL}/jobdetail/${job._id}`} />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="job-desription">
                            <h5 className="mt-3 text-uppercase">Job Description</h5>
                            <div className="job-desription-content">
                                <pre>

                                    {
                                        job.job_description
                                    }

                                </pre>
                            </div>
                        </div>
                        <div className="job-requirements">
                            <h5 className="mt-3 text-uppercase">JOB REQUIREMENTS</h5>
                            <div className="job-requirements-content">
                                <span>
                                    <pre>
                                        {job.job_requirement}
                                    </pre>
                                </span>
                            </div>
                        </div>
                        <div className="job-req-doc">
                            <h5 className="mt-3 text-uppercase">Rusume Requirements</h5>
                            <div className="job-req-doc-content">
                                <span>
                                    - Resume <br />
                                    - Job application <br />
                                    - Health certificate (can be added when matriculation)
                                </span>
                            </div>
                        </div>
                        <div className="job-benefits">
                            <h5 className="mt-3 text-uppercase">BENEFITS</h5>
                            <div className="job-benefits-content">
                                <pre>
                                    {job.benefit}
                                </pre>
                            </div>
                        </div>
                        <hr />
                        <div className="job-contact-info">
                            <h5 className="mt-3 text-uppercase">CONTACT INFO</h5>
                            <div className="job-req-doc-content">
                                <span>
                                    - Contact name: {job.contact_name}<br />
                                    - Contact phone: {job.contact_phone}<br />
                                    - Contact address: {job.contact_address}<br />
                                    - Contact email: {job.contact_email}
                                </span>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobsDetail
