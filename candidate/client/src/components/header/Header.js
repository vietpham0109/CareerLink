import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from './logo-12.png'
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'
import MenuRightAuth from './MenuRightAuth'


const Header = () => {
    const { auth } = useSelector(state => state)

    return (
        <>
            <div className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <Link to="/" className="logo">
                            <img className='logo' src={logo} alt='logo' onClick={() => window.scrollTo({ top: 0 })} />
                        </Link>
                        <div className="header-content">
                            <MenuLeft />
                            {auth.token ? <MenuRightAuth /> : <MenuRight />}
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header
