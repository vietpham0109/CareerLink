import { Col, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import Industry from "../../components/industry/Industry";
import SearchJob from '../../components/jobs/SearchJob'
import { getDataAPI } from "../../utils/fetchData";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

function IndustryList(props) {
  const {t}=useTranslation()
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDataAPI("get-industry")
      setData(res.data)
      console.log(res.data)
    }
    fetchData();
  }, [])

  return (
    <>
      <Row style={{ border: "solid 1px #dddcdc" }}>
        <Col span={20} style={{ margin: "auto" }}>
          <SearchJob />
        </Col>
      </Row>
      <Col span={20} style={{ margin: "20px auto" }}>
        <Title level={2}> {t('Popularindustries')} </Title>
        <Row>
          {data.map((element) => {
            if (element.type === 'popular')
              return (
                <Col key={element._id} span={6}>
                  <Industry
                    title={element.title}
                    description={element.description}
                    image={element.image}
                  />
                </Col>
              );
          })}
        </Row>
      </Col>
      <Row style={{ backgroundColor: "#f3f6f8" }}>
        <Col span={20} style={{ margin: "20px auto" }}>
          <Title level={2}> {t('Browseindustryjobtitlesandlocations')} </Title>
          <Row>
            {data.map(element => {
              if (element.type === 'normal')
                return (
                  <Col key={element._id} span={6}>
                    <Industry
                      title={element.title}
                      description={element.description}
                      image={element.image}
                    />
                  </Col>
                );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default IndustryList;
