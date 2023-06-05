import React from 'react';
import app from './app-store.png'
import play from './play-store.png'
import logo from './logo-12.png'

import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row text-center">
                    <div className="footer-col-1 col-sm-3">
                        <h3>Download Our App</h3>
                        <p>Download App for Android and IOS mobile phone</p>
                        <div className="app-logo">
                            <img src={play} alt="" />
                            <img src={app} alt="" />
                        </div>
                    </div>
                    <div className="footer-col-2 col-sm-3">
                        <img src={logo} alt="" />
                        <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Jobs Accessible to the Many</p>
                    </div>
                    <div className="footer-col-3 col-sm-3">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>
                    <div className="footer-col-4 col-sm-3">
                        <h3>Follow Us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copyright">Copyright 2023 - All Rights Reserved by VietPham</p>
            </div>
        </div>
    );
};

export default Footer;