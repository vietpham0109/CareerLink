import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const MenuRight = () => {
    const navLinks = [
        { label: 'Register', title: 'Register', path: '/register' },
        { label: 'Login', title: 'Login', path: '/login' },
        { label: 'FOR CANDIDATE', title: 'FOR CANDIDATE', path: '/' }
    ]

    const { pathname } = useLocation()

    const isActive = (pn) => {
        if (pn === pathname) return 'active'
    }

    return (
        <div className="menu right">
            <ul className="navbar-nav flex-row">
                {
                    navLinks.map((link, index) => (
                        <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
                            <Link className="nav-link" to={link.path}>
                                <span className="font-weight-bold">{link.title}</span>
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </div>

    )
}

export default MenuRight
