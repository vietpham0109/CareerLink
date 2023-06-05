import React from "react";
import { Row, Col } from "antd";
import img from "../../images/imgcv/img.png";
import "./Cv.scss";
import { useTranslation } from "react-i18next";
function CV1({ size, color, step2 }) {
  const { t } = useTranslation();
  return (
    <Row style={{ backgroundColor: "#ccc" }} className='border shadow-sm'>
      <Col span={24}>
        <div
          className="resume-wrapper"
          style={{ fontSize: size ? size.size : "16px" }}
        >
          <div className="profile padding-wrapper">
            <div className="profile-img">
              <img src={img} alt="" />
            </div>
            <div className="profile-name">
              <h1>John Smith</h1>
            </div>
            <div className="profile-contact">
              <ul className="list-titles">
                <li>{t("Call")}</li>
                <li>Mail</li>
                <li>Web</li>
                <li>{t("HomeAddress")}</li>
              </ul>
              <ul className="list-content ">
                <li>+34 123 456 789</li>
                <li>j.anderson@gmail.com</li>
                <li>janderson.com</li>
                <li>Los Angeles, CA</li>
              </ul>
            </div>
            <div className="profile-over">
              <p>
                <span className="bold">Lorem</span> ipsum dolor sit amet,
                consectetur adipiscing elit. Vivamus euismod congue nisi, nec
                consequat quam. In consectetur faucibus turpis eget laoreet. Sed
                nec imperdiet purus.
              </p>
            </div>
            <div className="profile-social">
              <ul className="list-titles">
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Github</li>
              </ul>

              <ul className="list-content">
                <li>@janderson</li>
                <li>janderson</li>
                <li>janderson</li>
              </ul>
            </div>
          </div>
          <div
            className="experience padding-wrapper"
            style={{ background: color ? color.color : "#3d3e42" }}
          >
            <h3 className="experience-title">{t("Experience")}</h3>
            <div className="experience-wrapper">
              <div className="experience-job">
                <div className="company">
                  <div className="company-name">{t("Companyname")}</div>
                  <div className="company-time">Nov 2012 - {t("Present")}</div>
                </div>
                <div className="description">
                  <div className="title">Front End Developer </div>
                  <div className="des">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce a elit facilisis, adipiscing leo in, dignissim
                      magna.
                    </p>
                  </div>
                </div>
              </div>
              <div className="experience-job">
                <div className="company">
                  <div className="company-name">{t('Companyname')}</div>
                  <div className="company-time">Nov 2012 - {t('Present')}</div>
                </div>
                <div className="description">
                  <div className="title">Front End Developer </div>
                  <div className="des">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce a elit facilisis, adipiscing leo in, dignissim
                      magna.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-education">
              <h3>{t("Education")}</h3>
              <div className="education">
                <div className="left">
                  <div className="education-name">{t("Educationname")}</div>
                  <div className="education-time">Nov 2012 - {t('Present')}</div>
                </div>
                <div className="right">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce a elit facilisis, adipiscing leo in, dignissim magna.
                  </p>
                </div>
              </div>
            </div>
            <div className="experience-language">
              <h3>{t("Language")}</h3>
              <div className="language">
                <div className="left">
                  <div className="language-name">{t("Languagename")}</div>
                  <div className="language-level">High-Level</div>
                </div>
                <div className="right">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce a elit facilisis, adipiscing leo in, dignissim magna.
                  </p>
                </div>
              </div>
            </div>
            <div className="experience-other">
              <div className="skill">
                <h3 className="skill-title">{t("Skills")}</h3>
                <ul className="skill-list">
                  <li className="skill-percentage">
                    <div className="skill-item">
                      <span>HTML / HTML5</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                  <li className="skill-percentage">
                    <div className="skill-item">
                      <span>SASS/SCSS/LESS</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                  <li className="skill-percentage">
                    <div className="skill-item">
                      <span>JavaScript</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="hobbies">
                <h3 className="hobbies-title">{t('Hobbies')}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  a elit facilisis, adipiscing leo in, dignissim magna.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  a elit facilisis, adipiscing leo in, dignissim magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default CV1;
