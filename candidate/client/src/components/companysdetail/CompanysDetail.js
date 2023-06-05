import React, { useEffect, useState } from 'react'
import './CompanysDetail.scss'
import { Link, useParams } from 'react-router-dom'
import FollowCompanyBtn from '../FollowCompanyBtn'
import dateFormat from 'dateformat';
import BtnSaveJob from './BtnSaveJob'
import ShareModal from '../ShareModal'
import { BASE_URL } from '../../utils/config'
import { getDataAPI, postDataAPI } from '../../utils/fetchData'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


const CompanysDetails = () => {
    const { t } = useTranslation()
    const { id } = useParams()
    const [company, setCompany] = useState({})
    const [typeShare, setTypeShare] = useState(false)
    const [jobs, setJobs] = useState([])
    const { auth } = useSelector(state => state)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getDataAPI(`get-info-company-by-id/${id}`)
                setCompany(res.data)
                const jobs = await postDataAPI(`get-jobs-by-company/${id}`)
                setJobs(jobs.data)
            } catch (error) {
                setCompany([])
                setJobs([])
            }
        }
        fetchData()
    }, [])

    //follow


    return (
        <div className="company-detail-view mb-5" onLoad={window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="container">
                <div className="mt-3 text-1">
                    {
                        !auth.isCompany &&
                        <>
                            <Link to='/'>{t('Home')}</Link><span> / </span><Link to='/companys'>{t('Company')}</Link><span> / {company?.companyName}</span>
                        </>
                    }

                </div>
                <div className="company-detail-content mt-3">
                    <div className="row">
                        <div className="col-sm-2 logo-company text-center">
                            <img src={company.logo} alt="logo-company" />
                        </div>
                        <div className="col-sm-7 info-company">

                            <h4 className="name-company">{company?.companyName}</h4>
                            <p className="location-company"><i className="fas fa-map-marker-alt"></i> {t('Address')}: {company?.address}</p>
                            <p className="web-company"><i className="fas fa-globe"></i> Website: {company?.website}</p>
                            <p className="info-detail">{company?.info}</p>

                        </div>
                        <div className="col-sm-3 btn-1 text-center">
                            {
                                !auth.isCompany &&
                                <FollowCompanyBtn company={company} />
                            }
                            <button type="button" className="btn btn btn-light-1 mt-3" onClick={() => setTypeShare(!typeShare)}><i className="fas fa-share-alt"></i> Share Company</button>
                            <div className="item-share" style={{ display: `${typeShare ? 'block' : 'none'}` }}>
                                <ShareModal url={`${BASE_URL}/companydetail/${company?._id}`} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vacancie-recruiting mt-3">
                    <h2 className="text-center">Related jobs</h2>
                    <div className="container">
                        <div className="card">
                            <ul className="card-body">
                                <h3 className="card-title">{t('Found')} <span>{jobs?.length}</span> jobs for this company</h3>
                                {
                                    jobs?.map((element, index) => (
                                        <div key={index}>
                                            <li className="content-vacancie-recruiting row mt-3">
                                                <div className="col-sm-9">
                                                    <Link to={`${!auth.isCompany ? '' : '/company'}/jobdetail/${element._id}`}><span title={element.job_title} className="card-title">{element.job_title}</span></Link>
                                                    <div className="job-info row">
                                                        <div className="col-sm-4 salary">
                                                            <i className="fas fa-dollar-sign"></i><span> Salary: {element.salary?.money_type === 'VND' ? element.salary?.min / 1000000 + ' - ' + element.salary?.max / 1000000 + 'M' : element.salary?.min + ' - ' + element.salary?.max} {element.salary?.money_type}</span>
                                                        </div>
                                                        <div className="col-sm-4 location">
                                                            <i className="fas fa-map-marker-alt"></i><span title={element.address}> Location: {element.working_location}</span>
                                                        </div>
                                                        <div className="col-sm-4 end-date">
                                                            <i className="far fa-clock"></i><span title={dateFormat(element.expiring_date, 'dd/mm/yyyy')}> Deadline: {dateFormat(element.expiring_date, 'dd/mm/yyyy')}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {
                                                    !auth.isCompany &&
                                                    <BtnSaveJob job={element} />
                                                }
                                            </li>
                                            <hr />
                                        </div>

                                    ))
                                }
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CompanysDetails