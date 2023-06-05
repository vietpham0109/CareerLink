import React from "react";
import { Link, } from "react-router-dom";
import { Menu, Dropdown, Badge } from "antd";
import { useTranslation } from "react-i18next";

const { Item } = Menu;

const MenuLeft = () => {
  const { t } = useTranslation();
  const tabs = [
    { title: t("searchJob") },
    { title: t("JobFeed"), path: "/job-feed" },
    { title: t("Company"), path: "/companies" },
    { title: t("cvBuilder"), path: "/cv-builder" },
    { title: t("Alert"), path: "/job-alert", beta: '1' },
    { title: t("Course"), path: "/course", beta: '1' },
  ]

  const MenuSearch = ({ title }) => {
    const menuSearch = (
      <Menu style={{ minWidth: "10vw" }}>
        <Item>
          <Link
            to="/industry-list"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            {t("Industries")}
          </Link>
        </Item>
        <Item>
          <Link
            to="/jobs"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            {t("Jobs")}
          </Link>
        </Item>
      </Menu>
    );
    return (
      <Dropdown placement="bottomLeft" overlay={menuSearch}>
        <div style={{ color: "white", fontWeight: "bold" }}>{title}</div>
      </Dropdown>
    );
  };

  return (

    <Menu
      mode="horizontal"
      style={{ background: 'inherit', width: '50%', border: 'none' }}
    >
      {tabs.map((e, i) => (
        <Item key={i}>
          {e.beta ?
            <Badge size="small" count='Beta' color='green' style={{top: '-3px', right: '-6px', fontWeight: "bold"}}>
              <Link
                to={e.path && e.path}
                style={{ color: "white", fontWeight: "bold" }}
              >
                {e.title}
              </Link>
            </Badge>
            :
            e.path ?
              <Link
                to={e.path && e.path}
                style={{ color: "white", fontWeight: "bold" }}
              >
                {e.title}
              </Link>
              :
              <MenuSearch title={e.title} />
          }
        </Item>
      ))}
    </Menu>

  );
};

export default MenuLeft;
