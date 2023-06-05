import React, { useState, useLayoutEffect } from "react";
import { Row, Col, Card, Slider } from "antd";
import { Form, Input, Select, DatePicker, Button, Anchor } from "antd";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import {
    EyeInvisibleOutlined,
    EyeOutlined,
    MenuOutlined,
    SaveOutlined,
    MinusCircleOutlined,
    UserOutlined,
    PlusOutlined,
    SolutionOutlined,
    BookOutlined,
    TranslationOutlined,
    IdcardOutlined,
    StarOutlined,
    HeartOutlined,
    EditOutlined,
} from "@ant-design/icons";
import "./formUpdate.scss";

const { Item, List } = Form;
const { TextArea } = Input;
const { Link } = Anchor;
const dateFormat = 'YYYY-MM-DD';
const { RangePicker } = DatePicker;
dayjs.extend(customParseFormat);


function FormUpdate({ dataResume }) {
    const [scroll, setScroll] = useState("normal");
    const size = "large";
    const onFinish = (values) => {

    };
    // scroll fixed


    const LabelComponent = ({ icon, title, id }) => (
        <>
            <div
                style={{
                    transform: "translateY(-8px)",
                    color: "#005ca3",
                    fontSize: "36px",
                    marginRight: "16px",
                }}
            >
                {icon}
            </div>
            <div id={id} />

            <div style={{ fontSize: "24px", fontWeight: "bold" }}>{title}</div>
        </>
    );
    const [img, setImg] = useState();
    const tinhTP = [
        "An Giang",
        "		Kon Tum",
        "	Bà Rịa – Vũng Tàu",
        "	Lai Châu",
        "	Bắc Giang",
        "	Lâm Đồng",
        "	Bắc Kạn",
        "  Lạng Sơn",
        "	Bạc Liêu",
        "	Lào Cai",
        "	Bắc Ninh",
        "	Long An",
        "	Bến Tre",
        "	Nam Định",
        "	Bình Định",
        "	Nghệ An",
        "	Bình Dương",
        "	Ninh Bình",
        "	Bình Phước",
        "	Ninh Thuận",
        "	Bình Thuận",
        "	Phú Thọ",
        "	Cà Mau",
        "	Phú Yên",
        "	Cần Thơ",
        "	Quảng Bình",
        "	Cao Bằng",
        "	Quảng Nam",
        "	Đà Nẵng",
        "	Quảng Ngãi",
        "	Đắk Lắk",
        "	Quảng Ninh",
        "	Đắk Nông",
        "	Quảng Trị",
        "	Điện Biên",
        "	Sóc Trăng",
        "	Đồng Nai",
        "	Sơn La",
        "	Đồng Tháp",
        "	Tây Ninh",
        "	Gia Lai",
        "	Thái Bình",
        "	Hà Giang",
        "	Thái Nguyên",
        "	Hà Nam",
        "	Thanh Hóa",
        "	Hà Nội",
        "	Thừa Thiên Huế",
        "	Hà Tĩnh",
        "	Tiền Giang",
        "	Hải Dương",
        "	TP Hồ Chí Minh",
        "	Hải Phòng",
        "	Trà Vinh",
        "	Hậu Giang",
        "	Tuyên Quang",
        "	Hòa Bình",
        "	Vĩnh Long",
        "	Hưng Yên",
        "	Vĩnh Phúc",
        "	Khánh Hòa",
        "	Yên Bái",
        "	Kiên Giang",
    ];

    const handleChange = (e) => {
        const file = e.target.files[0];
        file.previews = URL.createObjectURL(file);
        setImg(file);
    };
    const CardButton = ({ title }) => {
        return (
            <div
                style={{
                    borderRadius: "4px",
                    marginBottom: "30px",
                    marginLeft: "30px",
                    padding: "10px",
                    boxShadow: "0 0 10px 1px rgb(0 0 0 / 10%)",
                    cursor: "pointer",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <div style={{ padding: "0 10px" }}>{title.icon}</div>

                    <div style={{ fontSize: "18px", padding: "0 10px" }}>
                        {title.title}
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div style={{ marginTop: "30px" }} className="step3-builder container">
            <Row>
                <Col span={18}>
                    <Form
                        name="dynamic_form_nest_item"
                        layout="vertical"
                        initialValues={dataResume}
                        onFinish={onFinish}
                        autoComplete="off"
                        className="form-buildcv"
                    >
                        <Card
                            style={{
                                borderRadius: "10px",
                                marginBottom: "30px",
                                boxShadow: "0 0 10px 1px rgb(0 0 0 / 10%)",
                            }}
                        >
                            <Item
                                label={
                                    <LabelComponent
                                        icon={<UserOutlined />}
                                        title={"Profile Tittle"}
                                        id={"profile-tittle"}
                                    />
                                }
                                
                            >
                                <Input
                                size={size} name='title'/>
                            </Item>
                        </Card>

                        <Card
                            style={{
                                borderRadius: "10px",
                                boxShadow: "0 0 10px 1px rgb(0 0 0 / 10%)",
                                marginBottom: "30px",
                            }}
                        >
                            <Item
                                id="information"

                                label={
                                    <LabelComponent
                                        icon={<IdcardOutlined />}
                                        title={"Information"}
                                        id={"information"}
                                    />
                                }
                            >
                                <Row>
                                    <Col span={8}>
                                        <div style={{ marginRight: "16px" }}>
                                            <Item label="First Name">
                                                <Input size={size} value={dataResume.first_name}/>
                                            </Item>
                                            <Item label="Phone">
                                                <Input placeholder="Enter Phone" value={dataResume.phone} size={size} />
                                            </Item>
                                            <Item label="Country">
                                                <Select size={size} value={dataResume.country}>
                                                    <Select.Option value="VN">Việt Nam</Select.Option>
                                                    <Select.Option value="other">Other</Select.Option>
                                                </Select>
                                            </Item>
                                            <Item label="Province/city">
                                                <Select size={size} value={dataResume.city}>
                                                    {tinhTP.map((e, i) => {
                                                        return (
                                                            <Select.Option key={i} value={e}>
                                                                {e}
                                                            </Select.Option>
                                                        );
                                                    })}
                                                </Select>
                                            </Item>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div style={{ marginLeft: "16px" }}>
                                            <Item label="Last Name">
                                                <Input  size={size} value={dataResume.last_name} />
                                            </Item>
                                            <Item label="Birth Date" >
                                                <DatePicker size={size} style={{width: '100%'}} 
                                                value={dayjs(dataResume.birth_day)}
                                                />
                                            </Item>
                                            <Item label="Email" >
                                                <Input value={dataResume.email} size={size} />
                                            </Item>

                                            <Item label="Address ">
                                                <Input defaultValue={dataResume.address} size={size} />
                                            </Item>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <img
                                                style={{
                                                    width: "150px",
                                                    height: "150px",
                                                    borderRadius: "50%",
                                                }}
                                                src={
                                                    img
                                                        ? img.previews
                                                        : dataResume.avatar ? dataResume.avatar : "https://static.careerbuilder.vn/themes/kiemviecv32/jobseekers/images/icons/avatar_notext.png"
                                                }
                                                alt="img"
                                            />
                                            <span
                                                style={{
                                                    display: "block",
                                                    marginTop: "16px",
                                                    padding: "3px 5px",
                                                    borderRadius: "10px",
                                                    color: "white",
                                                    fontWeight: 'bold',
                                                    backgroundColor: "rgb(0, 183, 255)",
                                                }}
                                                className="btn-file"
                                            >
                                                Browse...
                                                <input type="file" onChange={handleChange} />
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </Item>
                        </Card>

                        <Card
                            style={{
                                borderRadius: "10px",
                                marginBottom: "30px",
                                boxShadow: "0 0 10px 1px rgb(0 0 0 / 10%)",
                            }}
                        >
                            <Item
                                label={
                                    <LabelComponent
                                        icon={<EditOutlined />}
                                        title={"Overview"}
                                        id={"overview"}
                                    />
                                }
                                name="overview"
                            >
                                <TextArea
                                    rows={4}
                                    value='abc'
                                    maxLength={200}
                                />
                            </Item>
                        </Card>

                        <Card
                            style={{
                                borderRadius: "10px",
                                marginBottom: "30px",
                                boxShadow: "0 0 10px 1px rgb(0 0 0 / 10%)",
                            }}
                        >
                            <Item
                                label={
                                    <LabelComponent
                                        icon={<SolutionOutlined />}
                                        title={"Work Experience"}
                                        id={"work-experience"}
                                    />
                                }
                            >
                                <Form.List name="work_experience">
                                    {(fields, { add, remove }, { errors }) => (
                                        <>
                                            {fields.map((field, index) => {
                                                return (
                                                    <Item key={index}>
                                                        <Row>
                                                            <Col span={12}>
                                                                <Item
                                                                    {...field}
                                                                    name={[field.name, "company"]}
                                                                    label="Company"
                                                                    style={{ width: "90%" }}
                                                                >
                                                                    <Input
                                                                        placeholder="Enter Company"
                                                                        size={size}
                                                                    />
                                                                </Item>
                                                            </Col>
                                                            <Col span={12}>
                                                                <Item
                                                                    {...field}
                                                                    label="Time"
                                                                    name={[field.name, "unknow"]}
                                                                >
                                                                    <Row>
                                                                        <Col span={12}>
                                                                            <Item
                                                                                {...field}
                                                                                name={[field.name, "timefrom"]}
                                                                                style={{ width: "95%" }}
                                                                            >
                                                                                <Input placeholder="From" size={size} />
                                                                            </Item>
                                                                        </Col>
                                                                        <Col span={12}>
                                                                            <Item
                                                                                {...field}
                                                                                name={[field.name, "timeto"]}
                                                                            >
                                                                                <Input placeholder="to" size={size} />
                                                                            </Item>
                                                                        </Col>
                                                                    </Row>
                                                                </Item>
                                                            </Col>
                                                            <Col span={24}>
                                                                <Item
                                                                    {...field}
                                                                    label="Job Position"
                                                                    name={[field.name, "position"]}
                                                                >
                                                                    <Input
                                                                        placeholder="Enter Job position"
                                                                        size={size}
                                                                    />
                                                                </Item>
                                                            </Col>
                                                            <Col span={24}>
                                                                <Item
                                                                    {...field}
                                                                    name={[field.name, "des"]}
                                                                    label="Job description "
                                                                >
                                                                    <TextArea
                                                                        rows={4}
                                                                        placeholder="Maximun input 100"
                                                                        maxLength={100}
                                                                    />
                                                                </Item>
                                                            </Col>
                                                        </Row>

                                                        <Button onClick={() => remove(field.name)}>
                                                            Remove
                                                            <MinusCircleOutlined
                                                                style={{ transform: "translateY(1px)" }}
                                                                className="dynamic-delete-button"
                                                            />
                                                        </Button>
                                                    </Item>
                                                );
                                            })}
                                            <Form.Item>
                                                {fields.length === 0 ? (
                                                    <Input
                                                        placeholder="Work experience Descriptions"
                                                        disabled
                                                        size={size}
                                                        style={{ margin: "20px 0" }}
                                                    />
                                                ) : null}
                                                <Button
                                                    type="primary"
                                                    onClick={() => add()}
                                                    icon={
                                                        <PlusOutlined
                                                            style={{ transform: "translateY(1px)" }}
                                                        />
                                                    }
                                                >
                                                    Add field
                                                </Button>
                                                <Form.ErrorList errors={errors} />
                                            </Form.Item>
                                        </>
                                    )}
                                </Form.List>
                            </Item>
                        </Card>

                        <Card
                            style={{
                                borderRadius: "10px",
                                marginBottom: "30px",
                                boxShadow: "0 0 10px 1px rgb(0 0 0 / 10%)",
                            }}
                        >
                            <Item
                                label={
                                    <LabelComponent
                                        icon={<BookOutlined />}
                                        title={"Education"}
                                        id={"education"}
                                    />
                                }
                            >
                                <List name="education">
                                    {(fields, { add, remove }, { errors }) => (
                                        <>
                                            {fields.map((field, index) => (
                                                <Item key={index}>
                                                    <Row>
                                                        <Col span={12}>
                                                            <Item
                                                                {...field}
                                                                label="Eduction Name"
                                                                name={[field.name, "name"]}
                                                                style={{ width: "90%" }}
                                                            >
                                                                <Input
                                                                    placeholder="Enter Education name"
                                                                    size={size}
                                                                />
                                                            </Item>
                                                        </Col>
                                                        <Col span={12}>
                                                            <Item
                                                                {...field}
                                                                label="Time"
                                                                name={[field.name, "unknow"]}
                                                            >
                                                                <Row>
                                                                    <Col span={12}>
                                                                        <Item
                                                                            {...field}
                                                                            name={[field.name, "timefrom"]}
                                                                            style={{ width: "95%" }}
                                                                        >
                                                                            <Input placeholder="From" size={size} />
                                                                        </Item>
                                                                    </Col>
                                                                    <Col span={12}>
                                                                        <Item
                                                                            {...field}
                                                                            name={[field.name, "timeto"]}
                                                                        >
                                                                            <Input placeholder="to" size={size} />
                                                                        </Item>
                                                                    </Col>
                                                                </Row>
                                                            </Item>
                                                        </Col>
                                                        <Col span={24}>
                                                            <Item
                                                                {...field}
                                                                name={[field.name, "des"]}
                                                                label="Education description "
                                                            >
                                                                <TextArea
                                                                    rows={4}
                                                                    placeholder="Maximun input 100"
                                                                    maxLength={100}
                                                                />
                                                            </Item>
                                                        </Col>
                                                    </Row>

                                                    <Button onClick={() => remove(field.name)}>
                                                        Remove
                                                        <MinusCircleOutlined
                                                            style={{ transform: "translateY(1px)" }}
                                                            className="dynamic-delete-button"
                                                        />
                                                    </Button>
                                                </Item>
                                            ))}
                                            <Form.Item>
                                                {fields.length === 0 ? (
                                                    <Input
                                                        placeholder="Enter Education Descriptions"
                                                        disabled
                                                        size={size}
                                                        style={{ margin: "20px 0" }}
                                                    />
                                                ) : null}
                                                <Button
                                                    type="primary"
                                                    onClick={() => add()}
                                                    icon={
                                                        <PlusOutlined
                                                            style={{ transform: "translateY(1px)" }}
                                                        />
                                                    }
                                                >
                                                    Add field
                                                </Button>
                                                <Form.ErrorList errors={errors} />
                                            </Form.Item>
                                        </>
                                    )}
                                </List>
                            </Item>
                        </Card>

                        <Card
                            style={{
                                borderRadius: "10px",
                                marginBottom: "30px",
                                boxShadow: "0 0 10px 1px rgb(0 0 0 / 10%)",
                            }}
                        >
                            <Item
                                label={
                                    <LabelComponent
                                        icon={<TranslationOutlined />}
                                        title={"Language"}
                                        id={"language"}
                                    />
                                }
                            >
                                <List name="language">
                                    {(fields, { add, remove }, { errors }) => (
                                        <>
                                            {fields.map((field, index) => (
                                                <Item key={index}>
                                                    <Row>
                                                        <Col span={12}>
                                                            <Item
                                                                {...field}
                                                                label="Language Name"
                                                                name={[field.name, "languageName"]}
                                                                style={{ width: "90%" }}
                                                            >
                                                                <Select size={size}>
                                                                    <Select.Option value="VN">
                                                                        Việt Nam
                                                                    </Select.Option>
                                                                    <Select.Option value="english">
                                                                        English
                                                                    </Select.Option>
                                                                    <Select.Option value="japan">
                                                                        Japan
                                                                    </Select.Option>
                                                                    <Select.Option value="china">
                                                                        China
                                                                    </Select.Option>
                                                                    <Select.Option value="other">
                                                                        Other
                                                                    </Select.Option>
                                                                </Select>
                                                            </Item>
                                                        </Col>
                                                        <Col span={12}>
                                                            <Item
                                                                {...field}
                                                                label="Language level"
                                                                name={[field.name, "languageLevel"]}
                                                            >
                                                                <Select size={size}>
                                                                    <Select.Option value="elementary">
                                                                        Elementary
                                                                    </Select.Option>
                                                                    <Select.Option value="intermediate">
                                                                        Intermediate
                                                                    </Select.Option>
                                                                    <Select.Option value="hightLevel">
                                                                        High-Level
                                                                    </Select.Option>
                                                                    <Select.Option value="nativeLanguage">
                                                                        Native Language
                                                                    </Select.Option>
                                                                </Select>
                                                            </Item>
                                                        </Col>
                                                        <Col span={24}>
                                                            <Item
                                                                {...field}
                                                                name={[field.name, "LanguageDes"]}
                                                                label="Language description "
                                                            >
                                                                <TextArea
                                                                    rows={4}
                                                                    placeholder="Maximun input 100"
                                                                    maxLength={100}
                                                                />
                                                            </Item>
                                                        </Col>
                                                    </Row>

                                                    <Button onClick={() => remove(field.name)}>
                                                        Remove
                                                        <MinusCircleOutlined
                                                            style={{ transform: "translateY(1px)" }}
                                                            className="dynamic-delete-button"
                                                        />
                                                    </Button>
                                                </Item>
                                            ))}
                                            <Form.Item>
                                                {fields.length === 0 ? (
                                                    <Input
                                                        placeholder="Enter Language Descriptions"
                                                        disabled
                                                        size={size}
                                                        style={{ margin: "20px 0" }}
                                                    />
                                                ) : null}
                                                <Button
                                                    type="primary"
                                                    onClick={() => add()}
                                                    icon={
                                                        <PlusOutlined
                                                            style={{ transform: "translateY(1px)" }}
                                                        />
                                                    }
                                                >
                                                    Add field
                                                </Button>
                                                <Form.ErrorList errors={errors} />
                                            </Form.Item>
                                        </>
                                    )}
                                </List>
                            </Item>
                        </Card>

                        <Card
                            style={{
                                borderRadius: "10px",
                                marginBottom: "30px",
                                boxShadow: "0 0 10px 1px rgb(0 0 0 / 10%)",
                            }}
                        >
                            <Item
                                label={
                                    <LabelComponent
                                        icon={<StarOutlined />}
                                        title={"Professional Skills"}
                                        id={"skills"}
                                    />
                                }
                            >
                                <List name="skill">
                                    {(fields, { add, remove }, { errors }) => (
                                        <>
                                            {fields.map((field, index) => (
                                                <Item key={index}>
                                                    <Row>
                                                        <Col span={12}>
                                                            <Item
                                                                {...field}
                                                                label="Skill "
                                                                name={[field.name, "skill"]}
                                                                style={{ width: "90%" }}
                                                            >
                                                                <Input placeholder="Enter Skill" size={size} />
                                                            </Item>
                                                        </Col>
                                                        <Col span={12}>
                                                            <Item
                                                                {...field}
                                                                label="Level "
                                                                name={[field.name, "level"]}
                                                            >
                                                                <Slider
                                                                    marks={{
                                                                        0: "0",
                                                                        1: "1",
                                                                        2: "2",
                                                                        3: "3",
                                                                        4: "4",
                                                                        5: "5",
                                                                    }}
                                                                    max={5}
                                                                />
                                                            </Item>
                                                        </Col>
                                                    </Row>

                                                    <Button onClick={() => remove(field.name)}>
                                                        Remove
                                                        <MinusCircleOutlined
                                                            style={{ transform: "translateY(1px)" }}
                                                            className="dynamic-delete-button"
                                                        />
                                                    </Button>
                                                </Item>
                                            ))}
                                            <Form.Item>
                                                {fields.length === 0 ? (
                                                    <Input
                                                        placeholder="Enter Skill Descriptions"
                                                        disabled
                                                        size={size}
                                                        style={{ margin: "20px 0" }}
                                                    />
                                                ) : null}
                                                <Button
                                                    type="primary"
                                                    onClick={() => add()}
                                                    icon={
                                                        <PlusOutlined
                                                            style={{ transform: "translateY(1px)" }}
                                                        />
                                                    }
                                                >
                                                    Add field
                                                </Button>
                                                <Form.ErrorList errors={errors} />
                                            </Form.Item>
                                        </>
                                    )}
                                </List>
                            </Item>
                        </Card>

                        <Card
                            style={{
                                borderRadius: "10px",
                                marginBottom: "30px",
                                boxShadow: "0 0 10px 1px rgb(0 0 0 / 10%)",
                            }}
                        >
                            <Item
                                id="hobbies"
                                label={
                                    <LabelComponent
                                        icon={<HeartOutlined />}
                                        title={"Hobbies"}
                                        id={"hobbies"}
                                    />
                                }
                                name="hobbies"
                            >
                                <TextArea
                                    rows={4}
                                    placeholder="Maxium input 100"
                                    maxLength={100}
                                />
                            </Item>
                        </Card>
                        <div className="text-center mb1">
                            <Button
                                className="submit-btn-none"
                                type="primary"
                                htmlType="submit"
                                size="large"
                                style={{marginBottom: "10px"}}
                            >
                                Update
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col
                    span={6}
                    style={{
                        position: "relative",
                        display: "flex",
                        width: "20%",
                        alignItems: scroll === "stop" ? "flex-end" : "flex-start",
                    }}
                >
                    <Row
                        style={
                            scroll === "scroll"
                                ? {
                                    position: "fixed",
                                    width: "20%",

                                    top: "10%",
                                }
                                : scroll === "stop"
                                    ? {}
                                    : {}
                        }
                    >

                        <Col span={24}>
                            <Card
                                style={{
                                    borderRadius: "4px",
                                    marginLeft: "30px",
                                    padding: "10px",
                                    boxShadow: "0 0 10px 1px rgb(0 0 0 / 10%)",
                                    cursor: "pointer",
                                    backgroundColor: "white",
                                }}
                            >
                                <Anchor affix={false}>
                                    <Link
                                        href="#profile-tittle"
                                        title={<h5>Profile Title</h5>}
                                    ></Link>
                                    <Link href="#information" title={<h5>Information</h5>}></Link>
                                    <Link href="#overview" title={<h5>Overview</h5>}></Link>
                                    <Link
                                        href="#work-experience"
                                        title={<h5>Work Experience</h5>}
                                    ></Link>
                                    <Link href="#education" title={<h5>Education</h5>}></Link>
                                    <Link href="#language" title={<h5>Language</h5>}></Link>
                                    <Link
                                        href="#skills"
                                        title={<h5>Professional Skills</h5>}
                                    ></Link>
                                    <Link href="#hobbies" title={<h5>Hobbies</h5>}></Link>
                                </Anchor>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div >
    );
}

export default React.memo(FormUpdate);
