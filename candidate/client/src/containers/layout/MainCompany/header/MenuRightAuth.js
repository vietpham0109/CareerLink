import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../../../../redux/actions/authAction";
import Avatar from "../../../../components/Avatar";
import NotifyModal from "../../../../components/NotifyModal";
import { useTranslation } from "react-i18next";
import { Popover, Button } from "antd";

const MenuRightAuth = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [language, setLanguage] = useState("EN");
  const navLinks = [
    { label: "FOR CANDIDATE", title: t("FORCANDIDATE"), path: "/" },
  ];

  const { auth, notify } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const isActive = (pn) => {
    if (pn === pathname) return "active";
  };

  const handleClickVi = () => {
    setLanguage("VI");
    i18n.changeLanguage("vi");
  };

  const handleClickEn = () => {
    setLanguage("EN");
    i18n.changeLanguage("en");
  };

  const content = (
    <div>
      <Button onClick={handleClickVi}>VI</Button>
      <Button onClick={handleClickEn}>EN</Button>
    </div>
  );
  return (
    <div className="menu">
      <ul className="navbar-nav flex-row">
        <li className="nav-item dropdown" style={{ opacity: 1 }}>
          <span
            className="nav-link position-relative"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className={`fas fa-bell icon-style`}></i>
            <span className="notify_length">{notify.data.length}</span>
          </span>
          <div
            className="dropdown-menu dropdown_menu-5"
            aria-labelledby="navbarDropdown"
            style={{ transform: "translateX(75px)" }}
          >
            <NotifyModal />
          </div>
        </li>

        <li className="nav-item dropdown" style={{ opacity: 1 }}>
          <span
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Avatar src={auth.user.avatar} size="medium-avatar" />
            {auth.user.lastname}
          </span>
          <div
            className="dropdown-menu dropdown_menu-6"
            aria-labelledby="navbarDropdown"
            style={{ zIndex: "1000" }}
          >
            {auth.isCompany &&
              <>
                <Link
                  className="dropdown-item"
                  to={`/company/profile/${auth.user._id}`}
                >
                  <i className="fas fa-user"></i> {t('ProfileCompany')}
                </Link>
              </>
            }
            <div className="dropdown-divider"></div>
            <Link
              className="dropdown-item logout"
              to="/"
              onClick={() => dispatch(logout())}
            >
              <i className="fas fa-sign-out-alt"></i> {t('Logout')}
            </Link>
          </div>
        </li>

        {navLinks.map((link, index) => (
          <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
            <Link className="nav-link" to={link.path}>
              <span className="font-weight-bold" style={{ color: "#fff" }}>
                {link.title}
              </span>
            </Link>
          </li>
        ))}
        <li className={`nav-item px-2 `} key={0}>
          <Popover placement="bottomRight" content={content} trigger="click">
            <Button className='language-1'>{language}</Button>
          </Popover>
        </li>
      </ul>
    </div>
  );
};

export default MenuRightAuth;
