import React from 'react';
import HeaderCandidate from './header/Header'
import FooterCandidate from './footer/Footer'


function MainCandidate({ children }) {
    return (
        <>
            <HeaderCandidate />
            <div className="main">
                {children}
            </div>
            <FooterCandidate />
        </>
    );
}

export default MainCandidate;