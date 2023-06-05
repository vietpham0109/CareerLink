import React from 'react'
import { Link } from 'react-router-dom'
import {  Menu, Dropdown} from "antd";
const { Item } = Menu;

const MenuLeft = () => {

    const tabs = [
        { title: "Search Job" },
        { title: "CV Builder", path: "/cv-builder" },
        { title: "Course", path: "/course" },
        { title: "Alert", path: "/job-alert" },
    ];

    const MenuSearch = ({ title }) => {
        const menuSearch = (
            <Menu style={{ minWidth: "10vw" }}>
                <Item>
                    <Link to="/industry-list" style={{ fontWeight: 'bold', fontSize: '15px', textDecoration: 'none' }}
                    >Industries</Link>
                </Item>
                <Item>
                    <Link to="/jobs" style={{ fontWeight: 'bold', fontSize: '15px', textDecoration: 'none' }}>Jobs</Link>
                </Item>
                <Item>
                    <Link to="/job-library" style={{ fontWeight: 'bold', fontSize: '15px', textDecoration: 'none' }}
                    >JobsFeed</Link>
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
        <div className="menu left" style={{width: '41%'}}>  
                <Menu mode="horizontal" style={{ background: 'linear-gradient(rgb(0 87 157), rgb(0 63 128))' }}>
                    {tabs.map((e, i) => (
                        <Item key={i} className="menu-item">
                            {e.path ? (
                                <Link
                                    to={e.path && e.path}
                                    style={{ color: "white", fontWeight: "bold" }}
                                >
                                    {e.title}
                                </Link>
                            ) : (
                                <MenuSearch title={e.title} />
                            )}
                        </Item>
                    ))}
                </Menu>                    
        </div>

    )
}

export default MenuLeft
