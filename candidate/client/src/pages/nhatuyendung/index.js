import React from "react";
import "./nhatuyendung.scss";
import img1 from "./img_cty1.png";
import img2 from "./img_cty2.png";
import img3 from "./img_cty3.png";
import img0 from "./home-teamworks.svg";
import { useTranslation } from "react-i18next";

const NhaTuyenDung = () => {
  const { t } = useTranslation();

  return (
    <div className="for-employers pb-5" onLoad={window.scrollTo(0, 0)}>
      <div className="banner-employers">
        <div className="container header-1">
          <div className="row content-banner">
            <div className="col-sm-6 content-1">
              <h3 id="section-header-0">{t("HelpingYourBusinessMoveUp")}</h3>
              <p id="section-header-1">
                {t("GetYourJobMatchedWithTheRightCandidate")}
              </p>
            </div>
            <div className="col-sm-6 img-header">
              <img src={img0} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section id="1" className="container home-company-content mt-5">
        <div id="section-header-2">
          <h3 className="text-center">{t("WHATWEOFFER")}</h3>
          <p className="text-center">{t("Weprovidevariety")}</p>
        </div>
        <div id="section-1" className="row">
          <div className="col-sm-6 img-1">
            <img src={img1} alt="" />
          </div>
          <div className="col-sm-6 detail">
            <h4>{t("PostJob")}</h4>
            <ul>
              <li>
                <i class="far fa-check-square"></i>{" "}
                {t("Satisfactionguaranteed")}
              </li>
              <li>
                <i class="far fa-check-square"></i>{" "}
                {t("Postajobandrecieveapplicationsquickly")}
              </li>
              <li>
                <i class="far fa-check-square"></i>{" "}
                {t("Manageyourapplicationonlineeasily")}
              </li>
            </ul>
          </div>
        </div>
        <div id="section-2" className="row">
          <div className="col-sm-6 detail-1">
            <h4>{t("SearchResume")}</h4>
            <ul>
              <li>
                <i class="far fa-check-square"></i>{" "}
                {t("dayunlimitedaccesstoprofessionalsdatabase")}
              </li>
              <li>
                <i class="far fa-check-square"></i>{" "}
                {t("Getresultsthatpreciselymatchpeoplewithyourjobs")}
              </li>
              <li>
                <i class="far fa-check-square"></i>{" "}
                {t("Proactivelysearchforcandidatesandstarthiringtoday")}
              </li>
            </ul>
          </div>
          <div className="col-sm-6 img-1 text-right">
            <img className="text-end" src={img2} alt="" />
          </div>
        </div>
        <div id="section-3" className="row">
          <div className="col-sm-6 img-1">
            <img src={img3} alt="" />
          </div>
          <div className="col-sm-6 detail">
            <h4>{t("EmployerBranding")}</h4>
            <ul>
              <li>
                <i class="far fa-check-square"></i>{" "}
                {t("Morethan7millionjobseekersvisitRankWorksamonth")}
              </li>
              <li>
                <i class="far fa-check-square"></i>{" "}
                {t(
                  "Employendbannerhavebeenoptimizedtoattractthemostqualifiedcandidates"
                )}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NhaTuyenDung;
