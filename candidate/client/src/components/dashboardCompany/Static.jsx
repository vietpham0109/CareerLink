import React, { useEffect, useState } from "react";
import { Row, Col, Carousel, Statistic, Typography, Card, } from "antd";
import { LikeOutlined, CheckCircleTwoTone, PieChartTwoTone, WarningTwoTone } from "@ant-design/icons";
import { postDataAPI, getDataAPI } from '../../utils/fetchData'
import { useSelector } from 'react-redux'


const contentStyle = {
  height: "300px",
  width: "100%",
  color: "#fff",
  lineHeight: "300px",
  textAlign: "center",
  borderRadius: "20px",
};

const now = new Date()

function Static(props) {
  const { Title } = Typography;
  const { auth } = useSelector(state => state)
  const [jobExpired, setExpired] = useState(0)
  const [jobUnExpired, setUnExpired] = useState(0)
  const [cvSubmited, setSubmited] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await postDataAPI(`get-jobs-by-company/${auth.user?._id}`)
        const res1 = await getDataAPI(`get-status-card/${auth.user?._id}`)
        console.log(res1)
        let expired = 0
        res.data.map(element => {
          if (now.getTime() > new Date(element.expiring_date).getTime())
            expired++;
        })
        setSubmited(res1.data?.count)
        setExpired(expired)
        setUnExpired(res.data.length - expired)
      } catch (error) {

      }
    }
    fetchData()
  }, [auth.token])

  return (
    <>
      <Row
        gutter={24}
        style={{
          margin: "50px 100px",
          height: "300px",
        }}
      >
        <Col span={16}>
          <div
            style={{
              backgroundColor: "rgb(200, 250, 205)",
              height: "300px",
              borderRadius: "20px",
              display: "block",
            }}
          >
            <div className="left" style={{ float: "left", margin: "20px", width: '40%' }}>
              <Title>Welcome</Title>
              <span style={{ fontSize: '28px' }}>{auth.user?.company?.companyName}</span>
            </div>
            <div className="righ" style={{ float: "right" }}>
              <img
                style={{ margin: "10px" }}
                src="https://i.pinimg.com/originals/96/e9/4e/96e94e1687ed54710f01c7b30b35b873.jpg"
                alt=""
              />
            </div>
          </div>
        </Col>
        <Col span={8}>
          <Carousel autoplay>
            <div>
              <img
                style={contentStyle}
                src="https://www.cv-library.co.uk/assets/images/cvlibrary-uk/home/module-career-advice-6d6a5d5283927239eb7ad7233d1382f21d964b8c76822badba735c2792f504c0.png"
                alt=""
              />
            </div>
            <div>
              <img
                style={contentStyle}
                src="https://www.cv-library.co.uk/career-advice/wp-content/uploads/2016/10/Curveball-job-intervew-questions-and-how-to-answer-them-e1652110502290.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                style={contentStyle}
                src="https://www.cv-library.co.uk/assets/images/cvlibrary-uk/home/module-company-az-399468657cbbfa919f627a8e8f245f872963baf761cb6da5d7e6c552a79217e8.png"
                alt=""
              />
            </div>
          </Carousel>
        </Col>
      </Row>
      <Row gutter={24} style={{ margin: "50px 100px" }}>
        <Col span={8}>
          <Card
            className="shadow"
            style={{
              borderRadius: "20px",
              border: "1px solid green",
            }}
          >
            <Statistic
              title="Total Job Unexpired"
              value={jobUnExpired}
              prefix={<CheckCircleTwoTone twoToneColor="#52c41a" />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            className="shadow"
            style={{
              borderRadius: "20px",
              border: "1px solid green",
            }}
          >
            <Statistic
              title="Total Job Expired"
              value={jobExpired}
              prefix={<WarningTwoTone twoToneColor="#eb2f96" />}
            />         
          </Card>
        </Col>
        <Col span={8}>
          <Card
            className="shadow"
            style={{
              borderRadius: "20px",
              border: "1px solid green",
            }}
          >
            <Statistic
              title="Total Resume Submited"
              value={cvSubmited}
              prefix={<PieChartTwoTone /> }
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Static;
