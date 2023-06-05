import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Popover, Button } from "antd";
import { useTranslation } from "react-i18next";

const MenuRight = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const [language, setLanguage] = useState("EN");

  const navLinks = [
    { label: "Register", title: t("Register"), path: "/register" },
    { label: "Login", title: t("Login"), path: "/login" },
    { label: "FOR EMPLOYERS", title: t("FOREMPLOYERS"), path: "/company" },
  ];


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
  const { pathname } = useLocation();

  const isActive = (pn) => {
    if (pn === pathname) return "active";
  };

  return (
    <div className="menu right">
      <ul className="navbar-nav flex-row">
        {navLinks.map((link, index) => (
          <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
            <Link className="nav-link" to={link.path}>
              <span className="font-weight-bold">{link.title}</span>
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

export default MenuRight;
