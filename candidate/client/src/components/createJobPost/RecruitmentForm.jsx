import React, { useEffect, useState } from 'react';
import { Form, Input, Typography, Select, Checkbox, DatePicker, Button } from 'antd'
import moment from 'moment';
import dateFormat from "dateformat";
import { getDataAPI } from '../../utils/fetchData';
import { useTranslation } from 'react-i18next';
const now = new Date()

const { Item } = Form;
const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;
const { Group } = Checkbox;
const tinhTP = [
    "An Giang",
    "Kon Tum",
    "Bà Rịa – Vũng Tàu",
    "Lai Châu",
    "Bắc Giang",
    "Lâm Đồng",
    "Bắc Kạn",
    "Lạng Sơn",
    "Bạc Liêu",
    "Lào Cai",
    "Bắc Ninh",
    "Long An",
    "Bến Tre",
    "Nam Định",
    "Bình Định",
    "Nghệ An",
    "Bình Dương",
    "Ninh Bình",
    "Bình Phước",
    "Ninh Thuận",
    "Bình Thuận",
    "Phú Thọ",
    "Cà Mau",
    "Phú Yên",
    "Cần Thơ",
    "Quảng Bình",
    "Cao Bằng",
    "Quảng Nam",
    "Đà Nẵng",
    "Quảng Ngãi",
    "Đắk Lắk",
    "Quảng Ninh",
    "Đắk Nông",
    "Quảng Trị",
    "Điện Biên",
    "Sóc Trăng",
    "Đồng Nai",
    "Sơn La",
    "Đồng Tháp",
    "Tây Ninh",
    "Gia Lai",
    "Thái Bình",
    "Hà Giang",
    "Thái Nguyên",
    "Hà Nam",
    "Thanh Hóa",
    "Hà Nội",
    "Thừa Thiên Huế",
    "Hà Tĩnh",
    "Tiền Giang",
    "Hải Dương",
    "TP Hồ Chí Minh",
    "Hải Phòng",
    "Trà Vinh",
    "Hậu Giang",
    "Tuyên Quang",
    "Hòa Bình",
    "Vĩnh Long",
    "Hưng Yên",
    "Vĩnh Phúc",
    "Khánh Hòa",
    "Yên Bái",
    "Kiên Giang",
];


function RecruitmentForm({ dataPost, setDataPost, setKeyTab }) {
    const { t } = useTranslation()
    const careerLevel = [
        t("StudentIntership"),
        t("Entrylevel"),
        t("Experience"),
        t("Teamleader"),
        t("Manager")
    ]
    const [EmploymentTypeChecked, setEmploymentType] = useState("Part-time")
    const [dataSalary, setDataSalary] = useState({ money_type: "VND", min: 0, max: 0 })
    const [dateExpiring, setDataExpiring] = useState(dateFormat(now, "paddedShortDate").toString())
    const [dataExperience, setDataExperience] = useState({ isRequired: false, from: 0, to: 0 })
    const [dataLevel, setDataLevel] = useState(t("StudentIntership"));
    const [industries, setIndustries] = useState([])

    const initialValues = {
        job_title: "",
        job_description: "",
        job_requirement: "",
        industry: "",
        working_location: tinhTP[0],
        address: "",
        benefit: "",
        expiring_date: "",
        level: t("StudentIntership"),
        salary: { money_type: "VND", min: 0, max: 0 },
        experience: { isRequired: false, from: 0, to: 0 }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getDataAPI("get-industry")
                setIndustries(res.data)
            } catch (error) {
                setIndustries([])
            }
        }
        fetchData()
    }, [])

    function onChangeTime(date, dateString) {
        setDataExpiring(date)
    }

    const onNext = (values) => {
        const data = { ...values, "expiring_date": dateExpiring, "level": dataLevel, "salary": dataSalary, experience: dataExperience, employment_type: EmploymentTypeChecked }
        setDataPost({ ...dataPost, ...data })
        setKeyTab("2")
    }

    const onReset = (values) => {
        const data = { ...values, "expiring_date": dateExpiring, "level": dataLevel, "salary": dataSalary, experience: dataExperience, employment_type: EmploymentTypeChecked }
        setDataPost({ ...dataPost, ...data })
        setKeyTab("1")
    }

    return (
        <Form layout='vertical' initialValues={initialValues} onFinish={onNext}>
            <Title level={3} style={{ background: "#f1f8fe", paddingLeft: "10px" }}>{t('RecruitmentInformation')}</Title>
            <Item label={t("Jobtitle")} name={"job_title"}><Input size='large' placeholder={t('Jobtitle')} style={{ maxWidth: "500px" }} /></Item>
            <Item label={t("Jobdescription")} name={"job_description"}><TextArea style={{ minHeight: "100px" }} /></Item>
            <Item label={t("Jobrequirement")} name={"job_requirement"}><TextArea style={{ minHeight: "100px" }} /></Item>
            <Item label={t("Industry")} name={"industry"}>
                <Select defaultValue={t("Selectone")}>
                    {
                        industries.map((element, index) => (
                            <Option key={index} value={element._id}>{element.title}</Option>
                        ))
                    }
                    <Option value={t("Selectone")}>{t("Selectone")}</Option>
                </Select>
            </Item>
            <Item label={t("Workinglocation")} name={"working_location"}>
                {/* <Input style={{ maxWidth: "500px" }} size='large' /> */}
                <Select value={tinhTP[0]} size='large' style={{ maxWidth: "500px" }}>
                    {
                        tinhTP.map((element, index) => (
                            <Option key={index} value={element}>{element}</Option>
                        ))
                    }
                </Select>
            </Item>
            <Item label={t("Address")} name={"address"}><Input size="large" style={{ maxWidth: "500px" }} /></Item>
            <Item className='item-salary' label={t("Salary")} style={{ minWidth: "600px", display: "flex" }}>
                <Select value={dataSalary.money_type} size='large' style={{ width: "120px", marginRight: "30px" }}
                    onChange={(e) => setDataSalary({ ...dataSalary, "money_type": e })}>
                    <Option value="USD">USD</Option>
                    <Option value="VND">VND</Option>
                </Select>
                <Input placeholder={t('Min')} size='large' name='min' style={{ width: "120px", marginRight: "30px" }}
                    onChange={(e) => setDataSalary({ ...dataSalary, [e.target.name]: e.target.value })} />
                <Input placeholder={t('Max')} size='large' name='max' style={{ width: "120px" }}
                    onChange={(e) => setDataSalary({ ...dataSalary, [e.target.name]: e.target.value })} />
            </Item>
            <Item label={t("Employmenttype")}>
                <Group options={["Part-time", "Full-time", "Intership", "Fresher"]}
                    value={EmploymentTypeChecked} onChange={(e) => setEmploymentType(e[0])} />
            </Item>
            <Item label={t("Expiringdate")}>
                <DatePicker size='large' value={moment(dateExpiring, "MM/DD/YYYY")} format={"MM/DD/YYYY"} onChange={onChangeTime} />
            </Item>
            <Item label={t("Benefit")} name='benefit'>
                <TextArea style={{ minHeight: "100px" }} />
            </Item>
            <Item label={t("Experience")}>
                <Select style={{ width: "200px", marginRight: "20px" }} size="large" value={dataExperience.isRequired}
                    onChange={e => setDataExperience({ ...dataExperience, "isRequired": e })}>
                    <Option value={false}>{t('Norequired')}</Option>
                    <Option value={true}>{t('Experience')}</Option>
                </Select>
                {
                    dataExperience.isRequired && <>
                        <Input size="large" name='from' placeholder='From' style={{ width: "120px", marginRight: "20px" }}
                            onChange={(e) => setDataExperience({ ...dataExperience, [e.target.name]: e.target.value })} />
                        <Input size="large" name='to' placeholder='to' style={{ width: "120px" }}
                            onChange={(e) => setDataExperience({ ...dataExperience, [e.target.name]: e.target.value })} />
                    </>
                }
            </Item>
            <Item label={t("Careerlevel")}>
                <Select value={dataLevel} onChange={e => setDataLevel(e)} size='large' style={{ width: "200px" }}>
                    {
                        careerLevel.map((element, index) => (
                            <Option key={index} value={element}>{element}</Option>
                        ))
                    }
                </Select>
            </Item>
            <Item wrapperCol={{ span: 8, offset: 10 }}>
                <Button size='large' type='primary' style={{ marginRight: '20px' }} htmlType='submit'>{t('Next')}</Button>
                <Button size='large' type='primary'>{t('ResetForm')}</Button>
            </Item>
        </Form>
    );
}

export default RecruitmentForm;