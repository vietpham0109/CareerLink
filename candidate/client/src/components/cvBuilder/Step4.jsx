import React from "react";
import { Row, Col, Button } from "antd";
import {
  CheckCircleOutlined,
  DownloadOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Cv from "./CvStep4";
import { useTranslation } from "react-i18next";

function Step4({ dataResume, avatar }) {
  const { t } = useTranslation();
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    margin: "24px 0",
  };

  return (
    <Row>
      <Col span={24}>
        <div style={style}>      
        </div>
      </Col>
      <Col span={24}>
        <Cv dataResume={dataResume} avatar={avatar} />
      </Col>
    </Row>
  );
}

export default Step4;
