import React, { useEffect } from "react";
import {
  Row,
  Col,
  Menu,
  Button,
  Tooltip,
  Input,
  Typography,
  Card,
  Form,
} from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  KeyOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import "./Course.scss";
import { useTranslation } from "react-i18next";
const { Item } = Menu;
const { Search } = Input;
const { Title, Text } = Typography;
const { Meta } = Card;
function Course() {
  const { t } = useTranslation();
  
  let scroll = 0;
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: scroll, behavior: 'smooth' })
        }, 100)
    }, [])

  const courses = [
    t("Admin"),
    t("Beauty"),
    t("Business"),
    t("HealthySafety"),
    t("Food"),
    t("Dataandmarketing"),
    t("Projectmanager"),
    t("Vocational"),
  ];
  const card = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const card1 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 5, 7, 8, 3, 2,
  ];
  const CardType = () => {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src="https://course.cv-library.co.uk/wp-content/uploads/2019/09/Admin-Secretarial_03.png"
              alt="Avatar"
              width="160"
              height="160"
              style={{ transform: "translateY(5px)" }}
            />
          </div>
          <div className="flip-card-back">
            <h1>{t("Course")}</h1>
            <p>56</p>
          </div>
        </div>
      </div>
    );
  };
  const CardCourse = () => {
    return (
      <Card
        hoverable
        style={{ width: "18vw", textAlign: "center", margin: "30px 0" }}
        cover={
          <img
            alt="example"
            width="331"
            height="166"
            src="https://course.cv-library.co.uk/wp-content/uploads/2016/12/excel-combined-331x166.jpg"
          />
        }
      >
        <Meta
          title={t("TheCompleteMicrosoftExcelCourse")}
          description="£90.00"
        />
        <Button
          type="primary"
          style={{ marginTop: "40px", padding: "0px 30px", fontSize: "18px" }}
        >
          {t("FINDOUTMORE")}
        </Button>
      </Card>
    );
  };
  return (
    <div className="course-container">
      <Row>
        <Col span={20} style={{ margin: "auto", padding: "15px 50px" }}>
          <Row>
            <Col span={12}>
              <div className="left" style={{ display: "flex" }}>
                <img
                  alt=""
                  src="https://beaeducation.co.uk/wp-content/themes/academy/images/courses-logo.png"
                />
                <Menu
                  mode="horizontal "
                  defaultSelectedKeys={["0"]}
                  inlineCollapsed={false}
                  theme="dark"
                  style={{
                    background: "#fff",
                    marginLeft: "8px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Item
                    style={{
                      fontSize: "16px",
                      color: "black",
                      borderRadius: "6px",
                    }}
                  >
                    {t("Courses")}
                  </Item>
                  <Item
                    style={{
                      fontSize: "16px",
                      color: "black",
                      borderRadius: "6px",
                    }}
                  >
                    {t("StaffTraining")}
                  </Item>
                  <Item
                    style={{
                      fontSize: "16px",
                      color: "black",
                      borderRadius: "6px",
                    }}
                  >
                    {t("Contact")}
                  </Item>
                </Menu>
              </div>
            </Col>
            <Col span={12}>
              <div
                className="right"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  height: "100%",
                  alignItems: "center",
                }}
              >
                <Button
                  style={{ marginLeft: "10px", height: "50px" }}
                  size="large"
                  icon={
                    <ShoppingCartOutlined
                      style={{ transform: "translateY(-2px)" }}
                    />
                  }
                >
                  {" "}
                  0 {t("items")} - £0.00
                </Button>
                <Button
                  style={{ marginLeft: "10px", height: "50px" }}
                  size="large"
                  icon={
                    <KeyOutlined style={{ transform: "translateY(-2px)" }} />
                  }
                >
                  {" "}
                  {t("CourseLogin")}
                </Button>
                <Tooltip title="Search">
                  <Button
                    style={{
                      marginLeft: "10px",
                      height: "50px",
                      width: "70px",
                    }}
                    type="primary"
                    size="large"
                    icon={<SearchOutlined />}
                  />
                </Tooltip>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ height: "50vh" }}>
          <div className="image-container">
            <div className="content">
              <p className="content-title">
                {t("Becomeabetteryouithover500onlinetrainingcourses")}
              </p>
              <Search
                className="content-search"
                placeholder={t("Searchforacourse")}
                allowClear
                size="large"
              />
              <p className="content-p">{t("PopularCourseCategories")}</p>
              <div className="content-job">
                {courses.map((e, i) => (
                  <span key={i} className="content-job_item">
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Col>
        <Col span={20} style={{ margin: "auto" }}>
          <div className="providers">
            <Title style={{ textAlign: "center" }}>
              {t("FeaturedProviders")}
            </Title>
            <div className="providers-wrap">
              <div className="providers-block">
                <img
                  alt=""
                  src="https://course.cv-library.co.uk/wp-content/themes/academy/images/sst.png"
                />
              </div>
              <div className="providers-block">
                <img
                  alt=""
                  src="https://course.cv-library.co.uk/wp-content/uploads/2021/10/IDM-Logo-1280x1065-300x250.png"
                />
              </div>
              <div className="providers-block">
                <img
                  alt=""
                  src="https://course.cv-library.co.uk/wp-content/themes/academy/images/vision.png"
                />
              </div>
            </div>
          </div>
        </Col>
        <Col span={24} style={{ backgroundColor: "#f3f6f8" }}>
          <div className="popular-course">
            <Title style={{ textAlign: "center", margin: "30px 0" }}>
              {t("PopularCourses")}
            </Title>

            <div className="card-course">
              {card.map((e, i) => (
                <CardCourse key={i} />
              ))}
            </div>
          </div>
        </Col>
        <Col span={20} style={{ margin: "auto" }}>
          <div className="personal">
            <Title style={{ textAlign: "center", margin: "30px 0" }}>
              {t("PersonalProfessionalDevelopment50CourseBundle")}
            </Title>
            <div className="personal-body">
              <div style={{ width: "50%" }}>
                <img
                  style={{ width: "96%" }}
                  alt=""
                  src="https://course.cv-library.co.uk/wp-content/themes/academy/images/bundle-banner.png"
                />
              </div>
              <div className="personal-des">
                <Text className="description">
                  <CheckCircleOutlined className="icon" />
                  {t("monthsunlimitedaccesstoover50onlinecourses")}
                </Text>
                <Text className="description">
                  <CheckCircleOutlined className="icon" />
                  {t("CPDApprovedfullyverifiablequalifications")}
                </Text>
                <Text className="description">
                  <CheckCircleOutlined className="icon" />
                  {t("Tutorsupport")}
                </Text>
                <Text className="description">
                  <CheckCircleOutlined className="icon" />
                  {t("Flexiblestudylearnfromanyinternetenableddevice")}
                </Text>
                <Button type="primary" className="btn">
                  {t("Start")}
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col span={24} style={{ backgroundColor: "#f3f6f8" }}>
          <div className="course-type">
            <Title style={{ textAlign: "center", margin: "30px 0" }}>
              {t("CourseCategories")}
            </Title>
            <div className="type">
              {card1.map((e, i) => (
                <CardType key={i} />
              ))}
            </div>
          </div>
        </Col>
        <Col span={20} style={{ margin: "auto" }}>
          <div className="validation">
            <Title style={{ textAlign: "center", margin: "30px 0" }}>
              {t("ValidateaQualification")}
            </Title>
            <Text
              style={{
                textAlign: "center",
                margin: "30px 0",
                display: "block",
              }}
            >
              {t("Enterstudentcertificatedetailsbelow")}
            </Text>
            <div className="validation-form">
              <Form style={{ marginBottom: 0 }}>
                <Form.Item
                  name="year"
                  rules={[{ required: true }]}
                  style={{ display: "inline-block", width: "calc(50% - 8px)" }}
                >
                  <Input placeholder={t("FirstName")} size="large" />
                </Form.Item>
                <Form.Item
                  name="month"
                  rules={[{ required: true }]}
                  style={{
                    display: "inline-block",
                    width: "calc(50% - 8px)",
                    margin: "0 8px",
                  }}
                >
                  <Input placeholder={t("LastName")} size="large" />
                </Form.Item>
                <Form.Item name="year" rules={[{ required: true }]}>
                  <Input placeholder={t("CertNo")} size="large" />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button
                    style={{ width: "50%", height: "30%", fontSize: "24px" }}
                    type="primary"
                    htmlType="submit"
                  >
                    {t("Submit")}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Course;
