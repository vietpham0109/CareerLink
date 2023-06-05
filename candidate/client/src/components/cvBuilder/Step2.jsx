import React, { useState } from "react";
import { Row, Col, Divider, Select } from "antd";
import Cv from "./CvStep4";
import CV from './Cv'
import { useTranslation } from "react-i18next";
import { SettingOutlined } from "@ant-design/icons";

const { Option } = Select;
function Step2() {
  const { t } = useTranslation();
  const [size, setSize] = useState({
    key: "2",
    size: "16px",
  });
  const [color, setColor] = useState({
    key: "1",
    color: "#3d3e42",
  });
  const handleClick = (key, size) => {
    setSize({
      key: key,
      size: size,
    });
  };
  const handleColor = (key, color) => {
    setColor({
      key: key,
      color: color,
    });
  };
  return (
    <div style={{ marginTop: "30px" }}>
      <Row>
        <Col span={5}>
          <div>
            <div>
              <Row>
                <Col span={24}>
                  <SettingOutlined style={{ fontSize: "24px" }} />
                  <span
                    style={{
                      fontSize: "22px",
                      transform: "translateY(3px)",
                      display: "inline-block",
                      marginLeft: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {t('ToolSetting')}
                  </span>
                </Col>
                <Divider />
                <Col span={24}>
                  <span
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      color: "rgb(0, 183, 255)",
                      fontSize: "22px",
                    }}
                  >
                    {t('Language')}
                  </span>
                  <span
                    style={{
                      display: "block",
                      color: "rgb(139 139 139)",
                      margin: "8px 0",
                      fontSize: "14px",
                    }}
                  >
                    {t('Morethan80ofEmployerspreferEnglishCVs')}
                  </span>
                  <Select
                    defaultValue="Eng"
                    style={{ width: 120 }}
                    bordered={false}
                  >
                    <Option value="Eng">{t('English')}</Option>
                    <Option value="VN">{t('Tiengviet')}</Option>
                  </Select>
                </Col>
                <Divider />

                <Col span={24}>
                  <span
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      color: "rgb(0, 183, 255)",
                      fontSize: "22px",
                      marginBottom: "10px",
                    }}
                  >
                    {t('Fontsize')}
                  </span>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        margin: "0 8px",
                        border:
                          size.key === "1"
                            ? "1px solid #8b391f"
                            : "1px solid #ccc",
                        borderRadius: "4px",
                        padding: "3px 8px ",
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        handleClick("1", "14px");
                      }}
                    >
                      A
                    </div>
                    <div
                      style={{
                        margin: "0 8px",
                        border:
                          size.key === "2"
                            ? "1px solid #8b391f"
                            : "1px solid #ccc",
                        borderRadius: "4px",
                        padding: "3px 8px ",
                        fontSize: "16px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        handleClick("2", "16px");
                      }}
                    >
                      A
                    </div>
                    <div
                      style={{
                        margin: "0 8px",
                        border:
                          size.key === "3"
                            ? "1px solid #8b391f"
                            : "1px solid #ccc",
                        borderRadius: "4px",
                        padding: "3px 8px ",
                        fontSize: "18px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        handleClick("3", "17px");
                      }}
                    >
                      A
                    </div>
                  </div>
                </Col>
                <Divider />

                <Col span={24}>
                  <span
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      color: "rgb(0, 183, 255)",
                      fontSize: "22px",
                      marginBottom: "10px",
                    }}
                  >
                    {t('BackgroundColor')}
                  </span>
                  <div style={{ display: "flex  " }}>
                    <div
                      style={{
                        padding: " 10px",
                        cursor: "pointer",
                        margin: "0 8px",
                        backgroundColor: "#3d3e42",
                        border:
                          color.key === "1"
                            ? "1px solid #8b391f"
                            : "1px solid black",
                      }}
                      onClick={() => {
                        handleColor("1", "#3d3e42");
                      }}
                    />
                    <div
                      style={{
                        padding: " 10px",
                        cursor: "pointer",
                        margin: "0 8px",
                        backgroundColor: "#0d132c",
                        border:
                          color.key === "2"
                            ? "1px solid #8b391f"
                            : "1px solid black",
                      }}
                      onClick={() => {
                        handleColor("2", "#0d132c");
                      }}
                    />
                    <div
                      style={{
                        padding: " 10px",
                        cursor: "pointer",
                        margin: "0 8px",
                        backgroundColor: "#241d1a",
                        border:
                          color.key === "3"
                            ? "1px solid #8b391f"
                            : "1px solid black",
                      }}
                      onClick={() => {
                        handleColor("3", "#241d1a");
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col span={1}>
          <div style={{ textAlign: "center" }}>
            <Divider type="vertical" style={{ height: "100vh" }} />
          </div>
        </Col>
        <Col span={18}>
          <CV size={size} color={color} />
        </Col>
      </Row>
    </div>
  );
}

export default Step2;
