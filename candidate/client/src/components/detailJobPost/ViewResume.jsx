import React from "react";
import { Row, Col, } from "antd";
import dateformat from 'dateformat'
import "./Cv.scss";
import { useTranslation } from "react-i18next";

function ViewResume({ dataResume, size, color }) {
    const { t } = useTranslation();
    return (
        <Row style={{ backgroundColor: "#ccc" }}>
            <Col span={24}>
                <div
                    className="resume-wrapper"
                    style={{ fontSize: size ? size.size : "16px" }}
                >
                    <div className="profile padding-wrapper">
                        <div className="profile-img">
                            <img src={dataResume?.avatar} alt="img" />
                        </div>
                        <div className="profile-name">
                            <h1>{dataResume.first_name + " " + dataResume.last_name}</h1>
                        </div>
                        <div className="profile-contact">
                            <ul className="list-titles">
                                {dataResume.birth_day && <li>{t('Birthday')}</li>}
                                {dataResume.phone && <li>{t('Call')}</li>}
                                {dataResume.email && <li>Mail</li>}
                                {dataResume.address && <li>{t('Address')}</li>}
                            </ul>
                            <ul className="list-content ">
                                {dataResume.birth_day && <li>{dateformat(dataResume.birth_day, "mm/dd/yyyy")}</li>}
                                {dataResume.birth_day && <li>{dataResume.phone}</li>}
                                {dataResume.birth_day && <li>{dataResume.email}</li>}
                                {dataResume.birth_day && <li>{dataResume.address}</li>}
                            </ul>
                        </div>
                        <div className="profile-over">
                            <p>
                                <span className="bold">{t('Overview')} </span>
                                {
                                    dataResume?.overview
                                }

                            </p>
                        </div>
                        <div className="profile-social">
                            <ul className="list-titles">
                                {dataResume?.twitter !== "" && <li>Twitter</li>}
                                {dataResume?.facebook !== "" && <li>facebook</li>}
                                {dataResume?.github !== "" && <li>github</li>}
                            </ul>

                            <ul className="list-content">
                                {dataResume?.twitter !== "" && <li>{dataResume?.twitter}</li>}
                                {dataResume?.facebook !== "" && <li>{dataResume?.facebook}</li>}
                                {dataResume?.github !== "" && <li>{dataResume?.github}</li>}
                            </ul>
                        </div>
                    </div>
                    <div
                        className="experience padding-wrapper"
                        style={{ background: color ? color.color : "#3d3e42" }}
                    >
                        {dataResume?.work_experience?.length > 0 ? <h3 className="experience-title">Experience</h3> : null}
                        <div className="experience-wrapper">
                            {
                                dataResume?.work_experience?.map((element, index) => (
                                    <div className="experience-job" key={index}>
                                        <div className="company">
                                            <div className="company-name">{element.company}</div>
                                            <div className="company-time">{element.timefrom} - {element.timeto}</div>
                                        </div>
                                        <div className="description">
                                            <div className="title">{element.position}</div>
                                            <div className="des">
                                                <p>
                                                    {element.des}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="experience-education">
                            {dataResume?.education?.length > 0 ? <h3>{t('Education')}</h3> : null}
                            {
                                dataResume?.education?.map((element, index) => (
                                    <div className="education" key={index}>
                                        <div className="left">
                                            <div className="education-name">{element.name}</div>
                                            <div className="education-time">{element.timefrom} - {element.timeto}</div>
                                        </div>
                                        <div className="right">
                                            <p>
                                                {element.des}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="experience-language">
                            {dataResume?.language?.length > 0 ? <h3>{t('Language')}</h3> : null}
                            {
                                dataResume?.language?.map((element, index) => (
                                    <div className="language" key={index}>
                                        <div className="left">
                                            <div className="language-name">{element.languageName}</div>
                                            <div className="language-level">{element.languageLevel}</div>
                                        </div>
                                        <div className="right">
                                            <p>
                                                {element.LanguageDes}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="experience-other">
                            {
                                dataResume?.skill?.length > 0 &&
                                <div className="skill">
                                    <h3 className="skill-title">{t('Skills')}</h3>
                                    <ul className="skill-list">
                                        {
                                            dataResume?.skill?.map((element, index) => (
                                                <li className="skill-percentage" key={index}>
                                                    <div className="skill-item">
                                                        <span>{element.skill}</span>
                                                        <p>
                                                            {element.descriptions}
                                                        </p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            }
                            <div className="hobbies">
                                <h3 className="hobbies-title">{t('Hobbies')}</h3>
                                <p>
                                    {dataResume?.hobbies}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default ViewResume;
