import React from "react";
import { useSelector } from "react-redux";

import UserCard from "../UserCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LeftSideBar = () => {
  const { t } = useTranslation();
  const { auth } = useSelector((state) => state);

  return (
    <div className="mt-3">
      <div className="card-10">
        <UserCard user={auth.user} />
      </div>
      <Link to={`${!auth.isCompany ? '/' : '/company'}`}>
        <div className="card-10">
          <div className="icon-11">
            <i className="fas fa-door-closed" style={{ color: "#03a9f4" }}></i>
          </div>
          <div className="content-11">
            <span>{t('Home')}</span>
          </div>
        </div>
      </Link>
      <Link>
        <div className="card-10">
          <div className="icon-11">
            <i className="fas fa-fire-alt" style={{ color: "#ff5722" }}></i>
          </div>
          <div className="content-11">
            <span>{t("Follow")}</span>
          </div>
        </div>
      </Link>
      <Link to={`${!auth.isCompany ? '/message' : '/company/message'}`}>
        <div className="card-10">
          <div className="icon-11">
            <i
              className="fab fa-facebook-messenger"
              style={{ color: "#007bff" }}
            ></i>
          </div>
          <div className="content-11">
            <span>{t("Messenger")}</span>
          </div>
        </div>
      </Link>
      <Link>
        <div className="card-10">
          <div className="icon-11">
            <i className="fas fa-bookmark" style={{ color: "#17a2b8" }}></i>
          </div>
          <div className="content-11">
            <span>{t("Saved")}</span>
          </div>
        </div>
      </Link>
    </div>

  );
};

export default LeftSideBar;
