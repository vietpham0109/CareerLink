import React, { useEffect } from "react";
import { Row, Col, Form, Button, Input, Typography } from "antd";
import { Link, useHistory } from "react-router-dom";
import "./CompanyForm.scss";
import { useTranslation } from "react-i18next";

import {
  loginForEmployer,
} from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const { Title } = Typography;



function LoginCompanyForm(props) {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    if (auth.user)
      if (auth.user.company_name)
        history.push("/employer/dashboard");
  }, [auth.user]);

  const onLogin = (values) => {
    
    dispatch(loginForEmployer(values));
  };

  return (
    <Row style={{ marginTop: "-10px" }}>
      <Col span={24} className="login-box">
        <Title level={1} style={{ textAlign: "center", color: "blue", marginTop: "20px" }}>
          {t('EMPLOYERLOGIN')}
        </Title>
        <Title
          level={4}
          style={{
            textAlign: "center",
            color: "blue",
            marginBottom: "10%",
          }}
        >
          {t('LOGININFORMATION')}
        </Title>
        <Form layout="vertical" onFinish={onLogin} style={{ marginLeft: "0" }}>
          <Form.Item
            className="user-box"
            rules={[{ required: true }, { type: "email" }]}
            hasFeedback
            name={"email"}
            label="Email"
            required
          >
            <Input
              className="inp"
              type={"email"}
              placeholder={t("Enteryouremail")}
            />
          </Form.Item>
          <Form.Item
            className="user-box"
            hasFeedback
            rules={[{ required: true }]}
            name={"password"}
            label={t("Password")}
            required
          >
            <Input
              className="inp"
              type={"password"}
              placeholder={t("Enteryourpassword")}
            />
          </Form.Item>
          <Form.Item>
            <Link className="fogotpass"
              to={""}
              style={{
                marginLeft: "220px",
                color: "blue",
                fontWeight: "bold",
                marginBottom: "0px",

              }}
            >
              {t('Forgotpassword')}
            </Link>
          </Form.Item>
          <Form.Item>
            <Button className="btnSubmit" htmlType="submit">
              {t('Submit')}
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default LoginCompanyForm;
