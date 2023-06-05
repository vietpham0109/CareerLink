import React, { useEffect } from "react";
import { Row, Col, Typography, Card, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./JobAlert.scss";
import { useTranslation } from "react-i18next";
const { Text, Title } = Typography;
const { Item } = Form;
function JobAlert() {
  const { t } = useTranslation();
  const style = { display: "block", marginBottom: "14px", fontSize: "15px" };
  
  let scroll = 0;
  useEffect(() => {
      setTimeout(() => {
          window.scrollTo({ top: scroll, behavior: 'smooth' })
      }, 100)
  }, [])

  const list = [
    {
      icon: "https://www.cv-library.co.uk/assets/images/jbe-icon-jobs-to-inbox-3fd17e1d1ecb99688f65519f09b312968eb6547a1c26ddc0ed819a2fea8d749e.svg",
      title: t("Getjobsstraighttoyouremailinbox"),
      des: t("Stayuptodatewiththela"),
    },
    {
      icon: "https://www.cv-library.co.uk/assets/images/jbe-icon-first-to-apply-c808e31bf56dd85f4b806005230a7238241688d41afaff414fd85dd1fa70ac5b.svg",
      title: t("Bethefirsttoapply"),
      des: t("Stayaheadofthecompet"),
    },
    {
      icon: "https://www.cv-library.co.uk/assets/images/jbe-icon-quick-and-easy-84839b300340ff9d5d81107a8c28c5b06a7c5b2c63c0ea8237fd1f966de36deb.svg",
      title: t("Quickeasysetup"),
      des: t("Ittakeslessthanoneminuteto"),
    },
    {
      icon: "https://www.cv-library.co.uk/assets/images/jbe-icon-multiple-alerts-6f03dd9b6492355454a10528320604db2898c09d75478638aaf290f9f29da283.svg",
      title: t("Createupto20alerts"),
      des: t("Createmultiplealertto"),
    },
  ];
  return (
    <div className="job-alert">
      <Row>
        <Col
          span={20}
          style={{ margin: "auto", padding: "10px 0", fontSize: "20px" }}
        >
          <Text style={{ padding: "0 50px" }}>
            <Link to={"/employer"}>{t("Search229710jobs")}</Link>
            {t("from9800companies")}
          </Text>
        </Col>
        <Col span={24}>
          <div className="job-img">
            <Col span={19} className="job-wrap">
              <div className="left">
                <Title style={{ color: "white" }}>
                  {t("GetJobAlertsstraighttoyourinbox")}
                </Title>
                <Text
                  style={{
                    color: "white",
                    fontSize: "18px",
                    margin: "30px 0",
                    display: "block",
                  }}
                >
                  {t("CVLibrarypopularJobAlertsservice")}
                </Text>
                <Text style={{ color: "white" }}>
                  {t("AlreadyregisteredViewmyJobAlerts")}
                </Text>
              </div>
              <div className="right">
                <Card
                  style={{
                    width: "63%",
                    float: "right",
                    borderRadius: "10px",
                    boxShadow: "0px 3px 3px 0px rgb(0 20 46 / 10%)",
                    zIndex: 1,
                    marginRight: 60,
                  }}
                >
                  <Title level={2} style={{ textAlign: "center" }}>
                    {t("CreateJobAlert")}
                  </Title>
                  <Form layout="vertical">
                    <Item label={t("KeywordsJobT")} name="Keywords/Job Title">
                      <Input size="large" placeholder={t("KeywordsJobT")} />
                    </Item>
                    <Item label={t("Location")} name="Location">
                      <Input size="large" placeholder={t("Location")} />
                    </Item>
                    <Item label="Email " name="Email Address">
                      <Input size="large" placeholder="Email " />
                    </Item>
                    <Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: "100%", height: "5vh" }}
                      >
                        {t("CreateJobAlert")}
                      </Button>
                    </Item>
                  </Form>
                  <Text style={{ textAlign: "center" }}>
                    {t("BycreatingjobalertwithJobFeed")}
                  </Text>
                </Card>
              </div>
            </Col>
          </div>
        </Col>
        <Col span={24} style={{ backgroundColor: "#f2f6f8", paddingTop: 40 }}>
          <Col span={19} style={{ margin: "auto" }}>
            <div className="wrap-body">
              <div className="left">
                <Title>{t("WhySetupJobAlerts")}</Title>
                <img
                  alt=""
                  src="https://www.cv-library.co.uk/assets/images/jbe-phone-mock-458c0f27e4125292fb2114bcdf479ce04366e7c03f490755c529e4a63827ad0b.png"
                />
              </div>
              <div className="right">
                {list.map((e, i) => (
                  <div className="item" key={i}>
                    <img width="70" alt="" src={e.icon} />
                    <div className="item-content">
                      <Title style={{ margin: " 0 0 6px" }} level={3}>
                        {e.title}
                      </Title>
                      <Text style={{ fontSize: "17px" }}>{e.des}</Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Col>
        <Col span={19} style={{ margin: "80px auto" }}>
          <div className="last">
            <div className="left">
              <div style={{ textAlign: "center" }}>
                <Title level={2}>{t("RegisteryourCV")}</Title>
                <Text style={style}>{t("Befoundby10000employers")}</Text>
                <Text
                  style={{
                    ...style,
                    marginBottom: "20px",
                  }}
                >
                  {t("UploadyourCVandstartapplyingnow")}
                </Text>
                <Button size="large" type="primary">
                  {t("RegisterNow")}
                </Button>
              </div>
            </div>
            <div className="right">
              <div style={{ textAlign: "center" }}>
                <Title level={2}>{t("Downloadtheapp")}</Title>
                <Text style={style}>{t("Nevermissanopportunity")}</Text>
                <Text
                  style={{
                    ...style,
                    marginBottom: "20px",
                  }}
                >
                  {t("Browseandapplytojobsonthego")}
                </Text>
                <Button size="large" type="primary">
                  {t("LearnMore")}
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default JobAlert;
