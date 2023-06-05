import React from 'react';
import Header from './header/Header'
import Footer from './footer/Footer'
function MainCompany({ children }) {
    return (
        <>
            <Header />
            <div className="main">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default MainCompany;