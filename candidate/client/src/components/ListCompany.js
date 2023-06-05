import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ListCompany = () => {

    const { listCompany } = useSelector(state => state)
    const companies = listCompany.companies ? listCompany.companies : []

    useEffect(() => {
       
    }, [listCompany.companies])

    return (
        <>
            {
                companies.map((item, index) => (
                    < div className="col-sm-3 company-block" >
                        <Link to={`/companydetail/${item.idCompany}`} >
                            <div className="company-box">
                                <img src={item.logo ? item.logo : 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'} alt="" />
                                <div className="company-box-content">
                                    <div className="company-name text-uppercase">
                                        <span>{item.companyName}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div >
                ))
            }
        </>
    );
};

export default ListCompany;