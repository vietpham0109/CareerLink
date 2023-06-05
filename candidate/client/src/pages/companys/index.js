import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchJob from "../../components/jobs/SearchJob";
import ListCompany from "../../components/ListCompany";
import "./company.scss";
import { useTranslation } from "react-i18next";

const Company = () => {
  const { t } = useTranslation();
  const { listCompany } = useSelector((state) => state);
  const companies = listCompany.companies ? listCompany.companies : [];

  let scroll = 0;
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: scroll, behavior: 'smooth' })
        }, 100)
    }, [])

  return (
    <div className="company-view mb-5">
      <SearchJob />
      <div className="container">
        <div className="mt-3 text-1">
          <Link to="/">{t('Home')} /</Link>
          <span> {t('Company')}</span>
        </div>
        <div className="company-content mt-3 card">
          <div className="card-body">
            <h3>
              {t('Found')} <span>{companies.length}</span> {t('companiesarerecruiting')}
            </h3>
            <div className="row">
              <div className="company-list-ul">
                <div className="company-list-li row">
                  <ListCompany />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
