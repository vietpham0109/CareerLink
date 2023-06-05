import { Col, Row } from "antd";
import LoginCompanyForm from "../../components/authCompany/LoginCompanyForm";
import React from "react";

function LoginCompany(props) {
  return (
    <Row style={{ marginTop: "50px", height: "70vh" }}>
      <Col span={20} style={{ margin: "auto" }}>
        <Row>
          <Col span={14}>
            <LoginCompanyForm />
          </Col>
          <Col span={10} style={{ textAlign: "center" }}>
            <img
              style={{ width: "500px" }}
              src="https://images.careerbuilder.vn/content/images/Banner/image.png"
              alt="img"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default LoginCompany;
