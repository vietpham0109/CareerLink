import React from 'react';
import app from './app-store.png'
import play from './play-store.png'
import logo from './logo-12.png'
import { useTranslation } from 'react-i18next';

import './Footer.scss'

const Footer = () => {
    const {t} = useTranslation();
    return (
        <div className="footer">
            <div className="container">
                <div className="row text-center">
                    <div className="footer-col-1 col-sm-3">
                        <h3>{t('Downloadourapp')}</h3>
                        <p>{t('downloaddes')}</p>
                        <div className="app-logo">
                            <img src={play} alt="" />
                            <img src={app} alt="" />
                        </div>
                    </div>
                    <div className="footer-col-2 col-sm-3">
                        <img src={logo} alt="" />
                        <p>{t('purpose')}</p>
                    </div>
                    <div className="footer-col-3 col-sm-3">
                        <h3>{t('links')}</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>
                    <div className="footer-col-4 col-sm-3">
                        <h3>{t('followus')}</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copyright">{t('copyright')}</p>
            </div>
        </div>
    );
};

export default Footer;