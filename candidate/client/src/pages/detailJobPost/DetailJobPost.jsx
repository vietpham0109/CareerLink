import React, { useEffect, useState } from "react";
import {
    Row,
    Col,
    Card,
    Tabs,
} from "antd";
import TableResume from "../../components/detailJobPost/TableResume";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getDataAPI } from "../../utils/fetchData";
import dateFormat from "dateformat";

const style12 = {
    fontSize: '17px',
    fontWeight: '600'
}

function DetailJobPost(props) {
    const { t } = useTranslation();
    const { TabPane } = Tabs;
    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getDataAPI(`get-job/${id}`)
                console.log(res.data)
                setData(res.data)
            } catch (error) {

            }
        }
        fetchData()
    }, [])

    return (
        <div className="pt-5 pb-5" onLoad={window.scrollTo({ top: 0, behavior: 'smooth' })} >
            <Row>
                <Col span={22} offset={1}>
                    <Card className="shadow">
                        <Row>
                            <Col>
                                <h2>{data.job_title}</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={5}>
                                <span style={style12}>Date created: </span>{dateFormat(data.createdAt, 'mm/dd/yyyy')}
                            </Col>
                            <Col span={5}>
                                <span style={style12}>Job Category: </span>{data.industry?.title}
                            </Col>
                        </Row>
                        <Row>
                            <Col span={5}>
                                <span style={style12}>Expires on: </span>{dateFormat(data.expiring_date, 'mm/dd/yyyy')}
                            </Col>
                            <Col span={5}>
                                <span style={style12}>Level: </span>{data.level}
                            </Col>
                        </Row>
                        <Row>
                            <Col span={5}>
                                <span style={style12}>Job type: </span>{data.employment_type}
                            </Col>
                            <Col span={5}>
                                <span style={style12}>Salary: </span>
                                {
                                    data.salary?.money_type === 'USD' ?
                                        <>{data.salary?.min} -{data.salary?.max} USD</> :
                                        <>{data.salary?.min} -{data.salary?.max} M</>
                                }
                            </Col>
                        </Row>

                        <br />
                        <Tabs
                            defaultActiveKey="1"
                            type="card"
                            size="large"
                            className="shadow-sm"
                        >
                            <TabPane tab={t("List CV")} key="1">
                                <Card>
                                    <TableResume />
                                </Card>
                            </TabPane>
                        </Tabs>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default DetailJobPost;