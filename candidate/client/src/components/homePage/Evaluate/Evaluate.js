import React from 'react';
import { Link } from 'react-router-dom';
import './Evaluate.scss';
import { useSelector } from 'react-redux'
import { useTranslation } from "react-i18next";


const Evaluate = () => {
    const { t } = useTranslation();

    const { auth } = useSelector(state => state)

    return (
        <div className="evaluate mt-5 mb-5">
            <div className="container">
                <h2 className="text-center"> {t('CandidatesSayAbout')} </h2>
                <h2 className="text-center text-2"></h2>
                <div id="carouselEvaluate" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active row no-gutters">
                            <div className="row evaluate-card">
                                <div className="col-sm-4">
                                    <div className="card border-info mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">Le Huu Hoang Long</h5>
                                            <p className="card-text text-secondary">{t('nx1')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card border-info mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">Dang Minh Hieu</h5>
                                            <p className="card-text text-secondary">{t('nx2')} </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card border-info mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">Tran Van Luc</h5>
                                            <p className="card-text text-secondary">{t('nx3')} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item row no-gutters">
                            <div className="row evaluate-card">
                                <div className="col-sm-4">
                                    <div className="card border-info mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">Vo Thi Ngoc Anh </h5>
                                            <p className="card-text text-secondary">{t('nx1')} </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card border-info mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">Nguyen Anh Tuan</h5>
                                            <p className="card-text text-secondary">{t('nx2')} </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card border-info mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">Tran Thi Thuy Trinh</h5>
                                            <p className="card-text text-secondary">{t('nx3')} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#carouselEvaluate" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                        <span className="sr-only">{t('Previous')}</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselEvaluate" role="button" data-slide="next">
                        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                        <span className="sr-only">{t('Next')}</span>
                    </a>
                </div>
                <div className="row text-center mt-5 evaluate-data">
                    <div className="col-sm-4">
                        <h1 className="card-title">2,500,000+</h1>
                        <p className="card-text text-secondary">{t('ProfessionalCVupdated')}</p>
                    </div>
                    <div className="col-sm-4">
                        <h1 className="card-title">60,000+</h1>
                        <p className="card-text text-secondary">{t('Employersoftenfindcandidateson')}</p>
                    </div>
                    <div className="col-sm-4">
                        <h1 className="card-title">2,000,000+</h1>
                        <p className="card-text text-secondary">{t('Candidatefoundsuitablejob')}</p>
                    </div>
                </div>
                {auth.token ?
                    <></>
                    :
                    <div className="row text-center mt-5 evaluate-data">
                        <div className="col-sm-12">
                            <p className="card-text text-secondary">{t('SowhynotstartyourdreamjobwithJobLibrary')}</p>
                            <Link to="/register">
                                <button type="button" className="btn btn-primary btn-dang-ky">{t('RegisterNow')}</button>
                            </Link>
                        </div>
                    </div>
                }
            </div>

        </div>
    );
};

export default Evaluate;