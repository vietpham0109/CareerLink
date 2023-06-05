import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './SubmitCVModal.scss'
import { submitCV } from '../../redux/actions/resumeAction'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { getDataAPI } from '../../utils/fetchData'

const SubmitCVModal = ({ setShowSubmitCV, job }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const { auth, socket } = useSelector(state => state)
    const [resumes, setResumes] = useState([])
    const [selected, setSelected] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getDataAPI("get-list-resume", auth.token)
                setResumes(res.data)
            } catch (error) {
                console.log(error)
            }

        }
        fetchData();
    }, [])

    const handleOnChange = (data) => {
        setSelected(data)
    }
    const handleSubmit = () => {
        dispatch(submitCV(job._id, job.idUser, selected, auth, socket))
        setShowSubmitCV(false)
    }

    return (
        <div className="submit-cv" onLoad={window.scrollTo(0, 0)}>
            <div className="submit-cv-box">
                <h4 className="text-center font-weight-bold"> {t('ApplyNow')} </h4>
                <hr />
                <h6> {t('Youareapplyingfor')} :</h6>
                <div className="card">
                    <div className="card-body">
                        <span className="name-job"> {job.job_title}</span>
                    </div>
                </div>
                <hr />
                <h6> {t('Youhave')} <span>{resumes.length}</span> {t('resumeonJobLibraryPleaseselectaresumetoapplyfor')} :</h6>
                <div className="mt-3 list-cv-data">
                    {resumes.map((data, index) => (
                        <div key={index}>
                            <input type="radio"
                                name="vote"
                                value={data}
                                id={data._id}

                                checked={selected._id === data._id}
                                onChange={e => handleOnChange(data)} />
                            <label key={index} htmlFor={data._id} title={data.title}>{data.title}</label>
                        </div>

                    ))}
                </div>
                <div className="button-submit-cv text-center">
                    {resumes.length > 0 ? <button type="button" class="btn btn-submit-cv" onClick={handleSubmit}><i className="far fa-paper-plane" ></i> {t('Send')} </button> : <h6> {t('PleasecreateCV')} </h6>}
                </div>
                <hr />
                <div className="button-no-cv mt-4">
                    <p className="font-weight-bold"> {t('Ifyoudonothaveaprofilefile')}</p>
                    <Link to={'/cv-builder'}><button type="button" className="btn btn-new-cv-1 text-uppercase"><i className="fas fa-pen-alt"></i> {t('CreateCVonline')} </button></Link>
                </div>
                <div className="close-submit" onClick={() => setShowSubmitCV(false)}>
                    &times;
                </div>
            </div>
        </div>
    )
}

export default SubmitCVModal
