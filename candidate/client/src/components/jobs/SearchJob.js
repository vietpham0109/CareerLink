import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchJob } from '../../redux/actions/listJobAction';
import { useTranslation } from "react-i18next";

const SearchJob = () => {
    const { t } = useTranslation();
    const { auth } = useSelector(state => state)

    const options = [
        {
            label: t('Alllocations'),
            value: 'All locations'
        },
        {
            label: t('HaNoi'),
            value: 'Ha Noi'
        },
        {
            label: t('DaNang'),
            value: 'Da Nang'
        },
        {
            label: t('HoChiMinh'),
            value: 'Ho Chi Minh'
        }, {
            label: t('HoiAn'),
            value: 'Hoi An'
        }
    ]
    const [address, setAddress] = useState('All locations')
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()


    const handleSearch = () => {
        dispatch(searchJob({ search, address, token: auth.token }))
    }

    const handleOnchange = (e) => {
        setAddress(e.target.value)
    }
    return (
        <div className="job-search">
            <div className="container">
                <div className="form-row">
                    <div className="col-lg-7 col-md-6">
                        <div className="find-jobs-search">
                            <input type="text" id="txtTuKhoa" className="form-control"
                                placeholder={t("Keywordstitles")} autoComplete="off" onChange={e => setSearch(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="find-jobs-select">
                            <select className="form-control dropdown" onChange={handleOnchange}>
                                {options.map((element, index) => (
                                    <option key={index} value={element.value}>{element.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3">
                        <div className="find-jobs-button">
                            <Link to='/jobs' >
                                <button type="button" className="btn btn-primary btn-tim-viec" onClick={handleSearch}>
                                    {t('FINDJOB')}
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchJob;