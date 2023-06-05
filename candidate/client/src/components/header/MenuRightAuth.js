import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { logout } from '../../redux/actions/authAction'
import Avatar from '../Avatar'
import NotifyModal from '../NotifyModal'
import { useTranslation } from "react-i18next";

const MenuRightAuth = () => {
    const { t } = useTranslation();
    const navLinks = [
        { label: 'FOR EMPLOYERS', title: 'FOR EMPLOYERS', path: '/nhatuyendung' },
    ]

    const { auth, notify } = useSelector(state => state)
    const dispatch = useDispatch()
    const { pathname } = useLocation()

    const isActive = (pn) => {
        if (pn === pathname) return 'active'
    }

    return (
        <div className="menu">
            <ul className="navbar-nav flex-row">
                <li className="nav-item dropdown" style={{ opacity: 1 }} >
                    <span className="nav-link position-relative" id="navbarDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className={`fas fa-bell icon-style`}></i>
                        <span className="notify_length">{notify.data.length}</span>
                    </span>
                    <div className="dropdown-menu dropdown_menu-5" aria-labelledby="navbarDropdown"
                        style={{ transform: 'translateX(75px)' }}>
                        <NotifyModal />
                    </div>
                </li>

                <li className="nav-item dropdown" style={{ opacity: 1 }} >
                    <span className="nav-link dropdown-toggle" id="navbarDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Avatar src={auth.user.avatar} size="medium-avatar" />
                        {auth.user.lastname}
                    </span>
                    <div className="dropdown-menu dropdown_menu-6" aria-labelledby="navbarDropdown" style={{ zIndex: '1000' }}>

                        {/* isUser moi hien  */}
                        {!auth.isCompany && !auth.isAdmin && <>
                            <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>
                                <i className="fas fa-user"></i> {t('ProfileCandidate')} </Link>
                            <Link className="dropdown-item" to={`/managecv`}>
                                <i className="fas fa-tasks"></i> {t('ManageCV')} </Link>
                            <Link className="dropdown-item" to={`/savedjobs/${auth.user._id}`}>
                                <i className="fas fa-heart"></i> {t('SavedJobs')} </Link>
                            <Link className="dropdown-item" to={`/appliedjobs/${auth.user._id}`}>
                                <i className="fas fa-briefcase"></i> {t('AppliedJobs')} </Link>
                        </>}
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item logout" to="/"
                            onClick={() => dispatch(logout())}>
                            <i className="fas fa-sign-out-alt"></i> {t('Logout')}
                        </Link>
                    </div>
                </li>

                {
                    navLinks.map((link, index) => (
                        <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
                            <Link className="nav-link" to={link.path}>
                                <span className="font-weight-bold" style={{ color: '#fff' }}>{link.title}</span>
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default MenuRightAuth
