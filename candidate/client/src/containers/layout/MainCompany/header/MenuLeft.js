import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
const { Item } = Menu;


const MenuLeft = () => {
    const { t } = useTranslation();
    const { auth } = useSelector((state) => state)
    
    const MenuService = ({ title }) => {
        const MenuService = (
            <Menu style={{ minWidth: "10vw" }}>
                <Item>
                    <Link to="/company/jobs" style={{ fontWeight: 'bold', fontSize: '15px', textDecoration: 'none' }}>{t('Jobs')}</Link>
                </Item>               
                <Item>
                    <Link to="/company/job-feed" style={{ fontWeight: 'bold', fontSize: '15px', textDecoration: 'none' }}
                    >{t('JobFeed')}</Link>
                </Item>
            </Menu>
        );
        return (
            <Dropdown placement="bottomLeft" overlay={MenuService}>
                <div style={{ color: "white", fontWeight: "bold" }}>{title}</div>
            </Dropdown>
        );
    };

    const MenuHRCentral = ({ title }) => {
        const MenuHRCentral = (
            <Menu style={{ minWidth: "10vw" }}>
                <Item>
                    <Link to="/company/dashboard" style={{ fontWeight: 'bold', fontSize: '15px', textDecoration: 'none' }}
                    >{t("DashBoard")}</Link>
                </Item>
                <Item>
                    <Link to="/company/create-job" style={{ fontWeight: 'bold', fontSize: '15px', textDecoration: 'none' }}>{t('JobPosting')} </Link>
                </Item>
                <Item>
                    <Link to="/company/manage-job" style={{ fontWeight: 'bold', fontSize: '15px', textDecoration: 'none' }}
                    > {t('ManageJob')} </Link>
                </Item>
            </Menu>
        );
        return (
            <Dropdown placement="bottomLeft" overlay={MenuHRCentral}>
                <div style={{ color: "white", fontWeight: "bold" }}>{title}</div>
            </Dropdown>
        );
    }

    return (

        <Menu mode="horizontal" style={{ background: 'inherit', width: '50%', border: 'none' }}>
            {/* <Item className="menu-item">
                <MenuService title={t("Service")} />
            </Item> */}
            <Item className="menu-item"><MenuHRCentral title={t("Menu")} /></Item>
            <Item className="menu-item"><Link to={"/company/job-feed"} style={{ color: "white", fontWeight: "bold" }}>{t('JobFeed')}</Link></Item>
            <Item className="menu-item"><Link to={`/company/companydetail/${auth.user?._id}`} style={{ color: "white", fontWeight: "bold" }}>{t("CompanyInfo")}</Link></Item>
            <Item className="menu-item"><Link to={"/company/contact-us"} style={{ color: "white", fontWeight: "bold" }}>{t("Contactus")}</Link></Item>
        </Menu>


    )
}

export default MenuLeft
