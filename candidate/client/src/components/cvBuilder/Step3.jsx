import React, { useState, useLayoutEffect } from "react";
import { Row, Col, Card } from "antd";
import { Form, Input, Select, DatePicker, Button, Anchor } from "antd";
import { useTranslation } from "react-i18next";
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
  SearchOutlined,
} from "@ant-design/icons";
import "./step3.scss";
const { Item, List } = Form;
const { TextArea } = Input;
const { Link } = Anchor;
const { Option } = Select;
function Step3({ dataResume, setDataResume, avatar, setAvatar }) {
  const { t } = useTranslation();
  const [scroll, setScroll] = useState("normal");
  const size = "large";
  const children = [
    <Option key={'nodejs'}>Nodejs</Option>,
    <Option key={'javascript'}>JavaScript</Option>,
    <Option key={'java'}>Java</Option>,
    <Option key={'reactJs'}>ReactJs</Option>,
    <Option key={'angularJs'}>AngularJs</Option>,
    <Option key={'python'}>Python</Option>,
    <Option key={'C++'}>C++</Option>,
    <Option key={'C#'}>C#</Option>,
    <Option key={'Unity'}>Unity</Option>,
    <Option key={'Ruby'}>Ruby</Option>,
    <Option key={'.Net'}>.Net</Option>,
    <Option key={'vuejs'}>VueJs</Option>
  ]
  const onFinish = (values) => {
    setDataResume({ ...values });
    setAvatar(img);
  };

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
 
  return (
    <div style={{ marginTop: "30px" }} className="step3-builder">
      <Row>
        <Col span={18}>
          <Form
            initialValues={dataResume}
            name="dynamic_form_nest_item"
            layout="vertical"
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
                    title={t("ProfileTitle")}
                    id="profile-tittle"
                  />
                }
                name="title"
              >
                <Input size={size} placeholder={t("Title")} />
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
                    title={t("Information")}
                    id={"information"}
                  />
                }
              >
                <Row>
                  <Col span={8}>
                    <div style={{ marginRight: "16px" }}>
                      <Item label={t("FirstName")} name="first_name">
                        <Input placeholder={t("EnterName")} size={size} />
                      </Item>
                      <Item label={t("Phone")} name="phone">
                        <Input placeholder={t("EnterPhone")} size={size} />
                      </Item>
                      <Item label="Twitter" name="twitter">
                        <Input placeholder="Enter Link Twitter" size={size} />
                      </Item>
                      <Item label="Facebook" name="facebook">
                        <Input placeholder="Enter Link Facebook" size={size} />
                      </Item>
                      <Item label="Country" name="country">
                        <Select size={size}>
                          <Select.Option value="VN">{t('VietNam')}</Select.Option>
                          <Select.Option value="other">{t('Other')}</Select.Option>
                        </Select>
                      </Item>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div style={{ marginLeft: "16px" }}>
                      <Item label={t("LastName")} name="last_name">
                        <Input placeholder={t("EnterLastname")} size={size} />
                      </Item>
                      <Item label={t("BirthDate")} name="birth_day">
                        <DatePicker size={size} style={{ width: '100%' }} />
                      </Item>
                      <Item label="Email" name="email">
                        <Input placeholder={t("EnterEmail")} size={size} />
                      </Item>
                      <Item label="Github" name="github">
                        <Input placeholder="Enter Link Github" size={size} />
                      </Item>
                      <Item label="Province/city" name="city">
                        <Select size={size}>
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
                    <h5 style={{ textAlign: "center", marginBottom: "20px" }}>
                      {" "}
                      Avatar
                    </h5>
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
                            : "https://static.careerbuilder.vn/themes/kiemviecv32/jobseekers/images/icons/avatar_notext.png"
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
                          backgroundColor: "rgb(0, 183, 255)",
                        }}
                        className="btn-file"
                      >
                        {t('Browse')}
                        <input type="file" onChange={handleChange} />
                      </span>
                    </div>
                  </Col>
                  <Col span={16}>
                    <Item label="Address " name="address">
                      <Input placeholder="Enter Address" size={size} />
                    </Item>
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
                    title={t("Overview")}
                    id={"overview"}
                  />
                }
                name="overview"
              >
                <TextArea
                  rows={4}
                  placeholder={t("Maximuminput200")}
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
                    title={t("WorkExperience")}
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
                                  label={t("Company")}
                                  style={{ width: "90%" }}
                                >
                                  <Input
                                    placeholder={t("EnterCompany")}
                                    size={size}
                                  />
                                </Item>
                              </Col>
                              <Col span={12}>
                                <Item
                                  {...field}
                                  label={t("Time")}
                                  name={[field.name, "unknow"]}
                                >
                                  <Row>
                                    <Col span={12}>
                                      <Item
                                        {...field}
                                        name={[field.name, "timefrom"]}
                                        style={{ width: "95%" }}
                                      >
                                        <Input placeholder={t("From")} size={size} />
                                      </Item>
                                    </Col>
                                    <Col span={12}>
                                      <Item
                                        {...field}
                                        name={[field.name, "timeto"]}
                                      >
                                        <Input placeholder={t("To")} size={size} />
                                      </Item>
                                    </Col>
                                  </Row>
                                </Item>
                              </Col>
                              <Col span={24}>
                                <Item
                                  {...field}
                                  label={t("JobPosition")}
                                  name={[field.name, "position"]}
                                >
                                  <Input
                                    placeholder={t("EnterJobposition")}
                                    size={size}
                                  />
                                </Item>
                              </Col>
                              <Col span={24}>
                                <Item
                                  {...field}
                                  name={[field.name, "des"]}
                                  label={t("Jobdescription")}
                                >
                                  <TextArea
                                    rows={4}
                                    placeholder={t("Maximuninput100")}
                                    maxLength={100}
                                  />
                                </Item>
                              </Col>
                            </Row>

                            <Button onClick={() => remove(field.name)}>
                              {t('Remove')}
                              <MinusCircleOutlined
                                style={{ transform: "translateY(-3px)" }}
                                className="dynamic-delete-button"
                              />
                            </Button>
                          </Item>
                        );
                      })}
                      <Form.Item>
                        {fields.length === 0 ? (
                          <Input
                            placeholder={t("WorkexperienceDescriptions")}
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
                              style={{ transform: "translateY(-3px)" }}
                            />
                          }
                        >
                          {t('Addfield')}
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
                    title={t("Education")}
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
                                label={t("Educationname")}
                                name={[field.name, "name"]}
                                style={{ width: "90%" }}
                              >
                                <Input
                                  placeholder={t("EnterEducationname")}
                                  size={size}
                                />
                              </Item>
                            </Col>
                            <Col span={12}>
                              <Item
                                {...field}
                                label={t("Time")}
                                name={[field.name, "unknow"]}
                              >
                                <Row>
                                  <Col span={12}>
                                    <Item
                                      {...field}
                                      name={[field.name, "timefrom"]}
                                      style={{ width: "95%" }}
                                    >
                                      <Input placeholder={t("From")} size={size} />
                                    </Item>
                                  </Col>
                                  <Col span={12}>
                                    <Item
                                      {...field}
                                      name={[field.name, "timeto"]}
                                    >
                                      <Input placeholder={t("To")} size={size} />
                                    </Item>
                                  </Col>
                                </Row>
                              </Item>
                            </Col>
                            <Col span={24}>
                              <Item
                                {...field}
                                name={[field.name, "des"]}
                                label={t("Educationdescription")}
                              >
                                <TextArea
                                  rows={4}
                                  placeholder={t("Maximuninput100")}
                                  maxLength={100}
                                />
                              </Item>
                            </Col>
                          </Row>

                          <Button onClick={() => remove(field.name)}>
                            {t('Remove')}
                            <MinusCircleOutlined
                              style={{ transform: "translateY(-3px)" }}
                              className="dynamic-delete-button"
                            />
                          </Button>
                        </Item>
                      ))}
                      <Form.Item>
                        {fields.length === 0 ? (
                          <Input
                            placeholder={t("EnterEducationDescriptions")}
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
                              style={{ transform: "translateY(-3px)" }}
                            />
                          }
                        >
                          {t('Addfield')}
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
                    title={t("Language")}
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
                                label={t("Languagename")}
                                name={[field.name, "languageName"]}
                                style={{ width: "90%" }}
                              >
                                <Select size={size}>
                                  <Select.Option value="english">
                                    {t('English')}
                                  </Select.Option>
                                  <Select.Option value="japan">
                                    {t('Japan')}
                                  </Select.Option>
                                  <Select.Option value="china">
                                    {t('China')}
                                  </Select.Option>
                                  <Select.Option value="other">
                                    {t('Other')}
                                  </Select.Option>
                                </Select>
                              </Item>
                            </Col>
                            <Col span={12}>
                              <Item
                                {...field}
                                label={t("Languagelevel")}
                                name={[field.name, "languageLevel"]}
                              >
                                <Select size={size}>
                                  <Select.Option value="elementary">
                                    {t('Elementary')}
                                  </Select.Option>
                                  <Select.Option value="intermediate">
                                    {t('Intermediate')}
                                  </Select.Option>
                                  <Select.Option value="hight-level">
                                    High-Level
                                  </Select.Option>
                                  <Select.Option value="native-language">
                                    Native Language
                                  </Select.Option>
                                </Select>
                              </Item>
                            </Col>
                            <Col span={24}>
                              <Item
                                {...field}
                                name={[field.name, "LanguageDes"]}
                                label={t("Languagedescription")}
                              >
                                <TextArea
                                  rows={4}
                                  placeholder={t("Maximuninput100")}
                                  maxLength={100}
                                />
                              </Item>
                            </Col>
                          </Row>

                          <Button onClick={() => remove(field.name)}>
                            {t('Remove')}
                            <MinusCircleOutlined
                              style={{ transform: "translateY(-3px)" }}
                              className="dynamic-delete-button"
                            />
                          </Button>
                        </Item>
                      ))}
                      <Form.Item>
                        {fields.length === 0 ? (
                          <Input
                            placeholder={t("EnterLanguageDescriptions")}
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
                              style={{ transform: "translateY(-3px)" }}
                            />
                          }
                        >
                          {t('Addfield')}
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
                    title={t("ProfessionalSkills")}
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
                            <Col span={24}>
                              <Item
                                {...field}
                                label={t("Skills")}
                                name={[field.name, "skill"]}
                              >
                                <Input placeholder={t("EnterSkill")} size={size} />
                              </Item>
                            </Col>
                            <Col span={24}>
                              <Item
                                {...field}
                                label="Descriptions "
                                name={[field.name, "descriptions"]}
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
                            {t('Remove')}
                            <MinusCircleOutlined
                              style={{ transform: "translateY(-3px)" }}
                              className="dynamic-delete-button"
                            />
                          </Button>
                        </Item>
                      ))}
                      <Form.Item>
                        {fields.length === 0 ? (
                          <Input
                            placeholder={t("EnterSkillDescriptions")}
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
                              style={{ transform: "translateY(-3px)" }}
                            />
                          }
                        >
                          {t('Addfield')}
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
                    title={t("Hobbies")}
                    id={"hobbies"}
                  />
                }
                name="hobbies"
              >
                <TextArea
                  rows={4}
                  placeholder={t("Maxiuminput100")}
                  maxLength={100}
                />
              </Item>
            </Card>

            <Card
              style={{
                borderRadius: "10px",
                marginBottom: "30px",
                boxShadow: "0 0 10px 1px rgb(0 0 0 / 10%)",
              }}>
              <Item
              id="tags"
                name={"tags"}
                label={
                  <LabelComponent
                    icon={<SearchOutlined />}
                    title={t("Tag search")}
                    id={"tag_search"}
                  />
                }>
                <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode">
                  {children}
                </Select>
              </Item>
            </Card>
            <Button
              className="submit-btn-none"
              type="primary"
              htmlType="submit"
              style={{ display: "none" }}
            >
              {t('Submit')}
            </Button>
          </Form>
        </Col>
        <Col
          span={6}
          style={{
            position: "relative",
            display: "flex",
            width: "20%",
            alignItems: scroll === "stop" ? "flex-end" : "flex-start",
            marginBottom: "30px",
          }}
        >
          <Row>
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
                    title={<h5>{t('ProfileTitle')}</h5>}
                  ></Link>
                  <Link href="#information" title={<h5>{t('Information')}</h5>}></Link>
                  <Link href="#overview" title={<h5>{t('Overview')}</h5>}></Link>
                  <Link
                    href="#work-experience"
                    title={<h5>{t('WorkExperience')}</h5>}
                  ></Link>
                  <Link href="#education" title={<h5>{t('Education')}</h5>}></Link>
                  <Link href="#language" title={<h5>{t('Language')}</h5>}></Link>
                  <Link
                    href="#skills"
                    title={<h5>{t('ProfessionalSkills')}</h5>}
                  ></Link>
                  <Link href="#hobbies" title={<h5>{t('Hobbies')}</h5>}></Link>
                 
                </Anchor>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Step3;
