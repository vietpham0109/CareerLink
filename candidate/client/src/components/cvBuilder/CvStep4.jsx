import React from "react";
import img from "../../images/imgcv/img.png";
import dateformat from 'dateformat'
import "./Cv.scss";
import { useTranslation } from "react-i18next";
import Pdf from "react-to-pdf";
import { Button } from 'antd';

const ref = React.createRef();

function CV1({ size, color, dataResume, avatar }) {
  const { t } = useTranslation();
  return (
    <div>

      <div
        className="resume-wrapper row"
        ref={ref}
      >
        <div className="profile-1 padding-wrapper col-5">
          <div className="profile-img">
            <img src={dataResume?.avatar ? dataResume?.avatar : avatar ? URL.createObjectURL(avatar) : img} alt="" />
          </div>
          <div className="profile-name">
            <span>{dataResume?.first_name ? dataResume.first_name + " " + dataResume.last_name : "John Smith"}</span>
          </div>
          <div className="profile-contact">
            <ul className="list-titles">
              <li>{t('Birthday')}</li>
              <li>{t('Call')}</li>
              <li>Mail</li>
              <li>{t('HomeAddress')}</li>
            </ul>
            <ul className="list-content ">
              <li>{dataResume?.birth_day ? dateformat(dataResume.birth_day, "mm/dd/yyyy") : "15/05/2000"}</li>
              <li>{dataResume?.phone ? dataResume.phone : "+34 123 456 789"}</li>
              <li>{dataResume?.email ? dataResume.email : "j.anderson@gmail.com"}</li>
              <li>{dataResume?.address ? dataResume.address : "Los Angeles, CA"}</li>
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
        <div className="experience-1 padding-wrapper col-7"
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
      <div className="text-center mt-3 mb-2">
        <Pdf targetRef={ref} filename={`CV-.pdf`}>
          {({ toPdf }) =>
            <Button type="primary" className='mr-3' size='large' onClick={toPdf}>
              Download CV
            </Button>
          }
        </Pdf>
      </div>
    </div>
  );
}

export default CV1;
