import dateFormat from 'dateformat';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { delete_resume } from '../../redux/actions/resumeAction';
import './ManageCV.scss';
import { getDataAPI } from '../../utils/fetchData';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';

import { useTranslation } from "react-i18next";



const ManageCV = () => {
    const { t } = useTranslation();

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const res = await getDataAPI("get-list-resume", auth.token)
            setData(res.data)
        } catch (error) {
            dispatch({ type: GLOBALTYPES.ALERT, payload: { error: "Login now!" } })
        }
    }

    useEffect(() => {
        fetchData(auth.token)
    }, [])

    const handleDelete = async (id) => {
        dispatch(delete_resume(id, auth.token))
        fetchData(auth.token)
    }


    return (
        <div className="manage-cv container mb-5" onLoad={window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <h3 className="text-center mt-3">{t('ManageCV')}</h3>
            <div className="manage-cv-content card mt-3">
                <div className="card-body">
                    <div className="manage-cv-warn">
                        <p className="">{data[0] ? "" : "You have not created any CV yet"}</p>
                    </div>
                    {
                        data.map((element, index) => (
                            <div className="manage-cv-list" key={index}>
                                <div className="list-cv">
                                    <span className="name-cv"><i className="fas fa-pen-alt"></i> {t('RESUME')}  {index + 1}: {element.title}</span>
                                    <span className="font-weight-bold mt-3">ID: NTV{element._id}</span>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <span className="font-weight-bold"> {t('Kindofresume')}  </span><span> {t('Profilecreatedonline')} </span>
                                        </div>
                                        <div className="col-sm-4">
                                            <span className="font-weight-bold">  {t('Status')} </span><span> {t('Waiting')} </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <span className="font-weight-bold"> {t('Datecreate')}  </span><span> {dateFormat(element.updatedAt, 'dd/mm/yyyy')}</span>
                                        </div>
                                        <div className="col-sm-4">
                                            <span className="font-weight-bold"> {t('View')}  </span><span> 0</span>
                                        </div>
                                    </div>
                                    <div className="form-check mt-3">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            {t('Allowemployerstosearchyourresumeandcontactyou')}
                                        </label>
                                    </div>
                                    <div className="btn-manage-cv mt-3">
                                        <Link to={`/reviewResume/${element._id}`}><button type="button" className="btn btn-manage-cv-1 mr-3"><i className="far fa-eye"></i> {t('View')}  </button></Link>
                                        <Link to={`/updateResume/${element._id}`}><button type="button" className="btn btn-manage-cv-1 mr-3"><i className="far fa-edit"></i> {t('Update')} </button></Link>
                                        <button type="button" className="btn btn-manage-cv-1" onClick={() => handleDelete(element._id)}><i className="far fa-trash-alt"></i> {t('Delete')} </button>
                                    </div>
                                </div>
                                <hr />
                            </div>

                        ))
                    }
                    <div className="button-no-cv mt-4">
                        <p className="font-weight-bold"> {t('Ifyoudonothaveaprofilefile')} </p>
                        <Link to={`cv-builder`}><button type="button" className="btn btn-new-cv-1 text-uppercase"><i className="fas fa-pen-alt"></i> {t('Createprofilebyonlinedeclarationform')} </button></Link>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ManageCV
