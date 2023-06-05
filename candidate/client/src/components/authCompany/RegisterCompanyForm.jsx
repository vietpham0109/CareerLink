import React from "react";
import { Row, Col, Form, Button, Input, Typography, Select } from "antd";
import "./CompanyForm.scss";
import { registerForEmployer } from "../../redux/actions/authAction"
import { useDispatch } from "react-redux";

const { Item } = Form;
const { Title } = Typography;
const { Option } = Select;

const sizeComp = [
  "Less 10",
  "10-20",
  "25-99",
  "100-499",
  "500-499",
  "1000-4999",
];

const cityList = [
  "Ha Noi",
  "Da Nang",
  "Ho Chi Minh",
  "Phan Thiet",
  "Ba Ria - Vung Tau",
];


const initialData = {
  email: "",
  password: "",
  cf_password: "",
  company_name: "",
  size: "Less 10",
  city: "Da Nang",
  address: "",
  info: "",
  contactName: "",
  phone: "",
};

function RegisterCompanyForm(props) {
  const dispatch = useDispatch()
  const register = (values) => {
    dispatch(registerForEmployer(values))
  };

  return (
    <Row className="register">
      <Col className="col-md-3 register-left">
        <img
          src="https://image.ibb.co/n7oTvU/logo_white.png"
          alt=""
          style={{ width: "200px", height: "200px" }}
        />
        <Title level={3} style={{ color: "white" }}>
          Welcome to CV Library
        </Title>
        <Item
          wrapperCol={{
            sm: { span: 5, offset: 10 },
          }}
        >
          <Button className="btnLog" type="ghost" htmlType="submit">
            LOGIN
          </Button>
        </Item>
      </Col>
      <Col offset={2} className="col-md-8 register-right">
        <Title
          style={{
            textAlign: "center",
            color: "rgb(0, 183, 255)",
            marginTop: "2%",
          }}
          level={2}
        >
          EMPLOYER REGISTRATION
        </Title>
        <Form
          layout="vertical"
          initialValues={initialData}
          onFinish={(values) => register(values)}
        >
          <Row>
            <Col span={8} offset={3}>
              <Form.Item
                className="nameInp"
                label="Email"
                name={"email"}
                rules={[{ required: true }, { type: "email" }]}
                hasFeedback
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                className="nameInp"
                label="Password"
                name={"password"}
                rules={[{ required: true }, { min: 6 }]}
                hasFeedback
              >
                <Input placeholder="Enter your password" />
              </Form.Item>

              <Form.Item
                className="nameInp"
                label="Confirm password"
                name={"cf_password"}
                dependencies={["password"]}
                hasFeedback
                rules={[
                  { required: true },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "The two passwords that you entered do not match!"
                      );
                    },
                  }),
                ]}
              >
                <Input placeholder="Enter your password" />
              </Form.Item>

              <Form.Item
                className="nameInp"
                label="Company name"
                name={"companyName"}
                rules={[{ required: true }]}
                hasFeedback
              >
                <Input />
              </Form.Item>

              <Form.Item
                className="nameInp"
                label="Company address"
                hasFeedback
                name={"address"}
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={6} offset={3}>
              <Form.Item className="nameInp" label="Size" name={"size"}>
                <Select>
                  {sizeComp.map((element, index) => (
                    <Option value={element} key={index}>
                      {element}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item className="nameInp" label="City" name={"city"}>
                {" "}
                <Select>
                  {cityList.map((element, index) => (
                    <Option value={element} key={index}>
                      {element}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                className="nameInp"
                label="Company summary"
                hasFeedback
                name={"info"}
              >
                <Input.TextArea style={{ height: 30 }} />
              </Form.Item>

              <Form.Item
                className="nameInp"
                label="Tax Code"
                name={"contactName"}
                rules={[{ required: true }]}
                hasFeedback
              >
                <Input />
              </Form.Item>

              <Form.Item
                className="nameInp"
                label="Phone"
                name={"phone"}
                rules={[{ required: true }]}
                hasFeedback
              >
                <Input />
              </Form.Item>
            </Col>

          </Row>

          <Form.Item
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: { span: 16, offset: 8 },
            }}
          >
            <Button
              type="primary"
              shape="round"
              htmlType="submit"
              style={{
                marginTop: "20px",
                marginLeft: "80px",
                width: "200px",
                height: "50px",
                marginBottom: "20px",
                fontWeight: "bold",
                letterSpacing: "4px",
              }}
            >
              REGISTER
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default RegisterCompanyForm;
