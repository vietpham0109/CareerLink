import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './SavedJob.scss'
import dateFormat from 'dateformat'
import SubmitCVModal from '../submitcvmodal/SubmitCVModal'
import FollowCompanyBtn from '../FollowJobBtn'
import { useTranslation } from "react-i18next";
import { postDataAPI } from '../../utils/fetchData'

const SavedJob = () => {
    const { t } = useTranslation();
    const { auth } = useSelector(state => state)
    const [infoSavedJob, setSavedJob] = useState([])
    const [ShowSubmitCV, setShowSubmitCV] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await postDataAPI("get-job-saved", { saved: auth.user.followJob })             
                setSavedJob(res.data)
            } catch (error) {
                console.log(error.response.data.msg)
            }
        }
        fetchData()
    }, [auth.user])

    return (
        <div className="saved-job-view container mb-5" onLoad={window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <h3 className="text-center mt-3"> {t('ManageSavedJobs')} </h3>
            <div className="saved-job-content card mt-3">
                <div className="card-body">
                    <div className="saved-job-list">
                        {
                            infoSavedJob.length > 0 && infoSavedJob.map(element => (
                                <div className="list-jobs" key={element._id}>
                                    <div className="row">
                                        <div className="col-sm-9">
                                            <div className="name-job">
                                                <Link to={`/jobdetail/${element._id}`}><span>{element.job_title}</span></Link>
                                            </div>
                                            <div className="name-company">
                                                <Link to={`/companydetail/${element.idUser}`}><span >{element.company_info?.companyName}</span></Link>
                                            </div>
                                            <div className="row mt-1">
                                                <div className="col-sm-4">
                                                    {
                                                        element.salary?.money_type === 'USD' ?
                                                            (<><span className="font-weight-bold"> {t('Salary')}  </span><span> {element.salary?.min} - {element.salary?.max} {t('USD')} </span></>) :
                                                            (<><span className="font-weight-bold"> {t('Salary')}  </span><span> {element.salary?.min / 1000000} - {element.salary?.max / 1000000} {t('M')} </span></>)
                                                    }

                                                </div>
                                                <div className="col-sm-4">
                                                    <span className="font-weight-bold"> {t('Location')}:</span><span> {element.working_location}</span>
                                                </div>
                                                <div className="col-sm-4">
                                                    <span className="font-weight-bold text-danger">{t('Expired')} </span><span> {dateFormat(element.expiring_date, 'dd/mm/yyyy')}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="btn-saved-job mt-3">
                                                <button type="button" className="btn btn-apply-job" onClick={() => setShowSubmitCV(true)}><i className="far fa-paper-plane"></i> {t('Apply')} </button>
                                                {
                                                    ShowSubmitCV &&
                                                    <SubmitCVModal
                                                        setShowSubmitCV={setShowSubmitCV}
                                                        job={element} />
                                                }
                                                <FollowCompanyBtn job={element} />
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))


                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavedJob
