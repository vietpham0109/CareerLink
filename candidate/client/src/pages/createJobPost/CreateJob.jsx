import React, { useState } from 'react';
import { Row, Col, Tabs, Card, Typography } from 'antd'
import RecruitmentForm from '../../components/createJobPost/RecruitmentForm'
import ContactInfoForm from '../../components/createJobPost/ContactInfoForm';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;
const { TabPane } = Tabs;

function CreateJob(props) {
    const {t}=useTranslation()
    const { auth } = useSelector(state => state);
    const initialValues = {
        company_id: auth.user?.company?._id,
        idUser: auth.user?._id,
        job_title: "",
        job_description: "",
        job_requirement: "",
        industry: "",
        working_location: "",
        address: "",
        benefit: "",
        contact_name: "",
        contact_phone: "",
        contact_address: "",
        contact_email: "",
    }

    const [data, setData] = useState(initialValues)
    const [keyTab, setKeyTab] = useState("1")


    return (
        <Row onLoad={window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Col span={18} style={{ margin: "50px auto" }}>
                <Title level={3}>{t('CreateJob')} </Title>
                <Card className='shadow'>
                    <Tabs defaultActiveKey="1" activeKey={keyTab}>
                        <TabPane tab={t("RecruitmentInformation")} key="1">
                            <RecruitmentForm dataPost={data} setDataPost={setData} setKeyTab={setKeyTab} />
                        </TabPane>
                        <TabPane tab={t("ContactInfomation")} key="2">
                            <ContactInfoForm dataPost={data} setDataPost={setData} setKeyTab={setKeyTab} />
                        </TabPane>
                    </Tabs>
                </Card>
            </Col>
        </Row>
    );
}

export default CreateJob; <h1>Create Job</h1>