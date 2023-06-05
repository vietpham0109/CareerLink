import React from "react";
import './style-1.scss'
import {
  Row,
  Col,
  Card,
  Tabs,
  Input,
  DatePicker,
  Select,
  Button,
  Table,
} from "antd";
import JobPosting from "../../components/manageJobPost/JobPosting";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ManageJob() {
  const { t } = useTranslation();
  const { TabPane } = Tabs;
  const { Option } = Select;


  return (
    <div className="pt-5 pb-5 managePost" onLoad={window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <Row>
        <Col span={22} offset={1}>
          <Card className="shadow">
            <Row>
              <Col span={5}>
                <h2>{t(`ManageJob`)}</h2>
              </Col>
              <Col span={3}>
                <Button
                  style={{
                    backgroundImage: "linear-gradient(#169b74, #86cb49)",
                    fontWeight: 'bold',
                    color: "white",
                    width: "120%",
                    height: "35px",
                  }}
                >
                  <Link to={"/company/create-job"}>{t("CreateJob")}</Link>
                </Button>
              </Col>
              <Col span={3} offset={1}>
                <Button
                  style={{
                    backgroundImage: "linear-gradient(#169b74, #86cb49)",
                    fontWeight: 'bold',
                    color: "white",
                    width: "120%",
                    height: "35px",
                  }}>
                  <Link to={"/company/find-resume"}>Find Resume</Link>
                </Button>
              </Col>
            </Row>
            {/* <Row>
              <Col span={5}>
                <h6>{t("Keyword")}</h6>
              </Col>
              <Col span={5}>
                <h6>{t("Findtoday")}</h6>
              </Col>
              <Col span={5}>
                <h6>{t("To")}</h6>
              </Col>
              <Col span={5}>
                <h6>{t("From")}</h6>
              </Col>
            </Row>
            <div className="mt-2"></div>
            <Row>
              <Col span={4}>
                <Input placeholder={t("enterKeyword")} style={{ height: 35 }} name="job_title" />
              </Col>
              <Col span={4} offset={1}>
                <Select
                  defaultValue="Date"
                  style={{ width: "100%", height: 35 }}
                >
                  <Option value="Date">{t("Date")}</Option>
                  <Option value="Time">{t("Time")}</Option>
                </Select>
              </Col>
              <Col span={4} offset={1}>
                <DatePicker style={{ width: "100%", height: 35 }} />
              </Col>
              <Col span={4} offset={1}>
                <DatePicker style={{ width: "100%", height: 35 }} />
              </Col>
              <Col span={4} offset={1}>
                <Button type="primary" style={{ width: "100%", height: 35 }}>
                  {t("Find")}
                </Button>
              </Col>
            </Row> */}
            <br />
            <Tabs
              defaultActiveKey="1"
              type="card"
              size="large"
              className="shadow-sm"
            >
              <TabPane tab={t("Jobsposting")} key="1">
                <Card>
                  <JobPosting />
                </Card>
              </TabPane>
              {/* <TabPane tab={t("Expiredjob")} key="3">
                <Table />
              </TabPane> */}
            </Tabs>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ManageJob;
