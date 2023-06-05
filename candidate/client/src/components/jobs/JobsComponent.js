import dateFormat from 'dateformat';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';

const JobsComponent = ({ dataJob }) => {
    const { t } = useTranslation();
    const { job_title, _id, salary, working_experience, working_location, expiring_date, company_info, idUser } = dataJob;
    const { auth } = useSelector(state => state)

    return (
        <Fragment>
            <div className="col-sm-9">
                <div className="job-list-name">
                    <Link to={`${!auth.isCompany ? '' : '/company'}/jobdetail/${_id}`} >
                        <span class="badge bg-info">{t('New')} </span>
                        <span title={job_title}> {job_title}</span>
                    </Link>
                </div>
                <div className="job-list-name-company">
                    <Link to={`${!auth.isCompany ? '' : '/company'}/companydetail/${idUser}`} >
                        <span >{company_info?.companyName}</span>
                    </Link>
                </div>
                <div className="row job-info">
                    <div className="salary col-sm-6">
                        <i class="fas fa-dollar-sign"></i>
                        <span>{t('Salary')} {salary.money_type === 'VND' ? salary.min / 1000000 + ' - ' + salary.max / 1000000 + 'M' : salary.min + ' - ' + salary.max} {salary.money_type}</span>
                    </div>
                    <div className="location col-sm-6">
                        <i class="fas fa-map-marker-alt"></i>
                        <span title={working_location}>{t('Location')}: {working_location}</span>
                    </div>
                </div>
                <div className="row job-info">
                    <div className="end-date col-sm-6">
                        <i className="far fa-clock"></i>
                        <span>Expiring date: {dateFormat(expiring_date, 'dd/mm/yyyy')}</span>

                    </div>
                    <div className="exp col-sm-6">
                        <i className="fas fa-icicles"></i>
                        {working_experience.isRequired ?
                            <span>{t('Exp')} {working_experience.from}-{working_experience.to}  years</span> :
                            <span>{t('Exp')} Not require</span>
                        }
                    </div>
                </div>
            </div>
            <div className="col-sm-3 right-job">
                <img src={company_info?.logo} alt="Logo company" />
            </div>
        </Fragment >
    );
};

export default JobsComponent;