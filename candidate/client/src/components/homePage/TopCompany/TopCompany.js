import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './TopCompany.scss';
import { useTranslation } from "react-i18next";

const TopCompany = () => {
    const { t } = useTranslation();

    const { topCompany } = useSelector(state => state)
    const [top, setTop] = useState(topCompany.topcompany ? topCompany.topcompany : [])

    useEffect(() => {
        if (topCompany.topcompany)
            setTop([...topCompany.topcompany])
    }, [topCompany.topcompany])

    return (
        <div className="company-best mt-5">
            <div className="container">
                <h2 className="text-center">{t('TopCompanies')}</h2>
                <h2 className="text-center text-2"></h2>
                <div className="row mt-3">
                    {
                        top.map(element => (
                            <div className="col-sm-3 col-6 company-block">
                                <Link to={`/companydetail/${element.idCompany}`}>
                                    <div className="company-box card">
                                        <img src={element.logo} alt='img' />
                                        <div className="company-box-content">
                                            <div className="company-name text-uppercase">{element.companyName}</div>
                                            <span className="company-tag text-uppercase">{t('NewJob')}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TopCompany;