import React, { useState } from "react";
import { Card, Row, Col, Button, Input, Select, Table, Space, Drawer } from "antd";
import { SearchOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Excel } from "antd-table-saveas-excel";
import { postDataAPI } from "../../utils/fetchData";
import { SelectOutlined, ExportOutlined } from "@ant-design/icons";
import ViewResume from "../../components/detailJobPost/ViewResume";

function FindResume(props) {
  const newDay = new Date().toLocaleDateString()
  const newTime = new Date().toLocaleTimeString()

  const [search, setSearch] = useState({})
  const [resumes, setResumes] = useState([])
  const [showResume, setShowResume] = useState(false)
  const [dataSelected, setSelected] = useState({})

  const handleViewResume = (record) => {
    setSelected(record)
    setShowResume(true)
  }

  const handleChange = (e) => {
    const { value } = e.target
    setSearch({ ...search, tag: value })
  }

  const handleFind = async () => {
    console.log(search)
    const res = await postDataAPI(`find-resume`, { ...search })
    setResumes(res.data)
  }


  const headCardStyle = {
    backgroundColor: "#AFEEEE",
    color: "black",
    margin: "20px",
    height: "60px",
  };
  const columns = [
    {
      title: "first_name",
      dataIndex: "first_name",
    },
    {
      title: "last_name",
      dataIndex: "last_name",
    },
    {
      title: "phone",
      dataIndex: "phone",
    },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      title: "Action",
      render: (text, record) => (
        <Space size="middle">
          <SelectOutlined onClick={() => handleViewResume(record)} />
          <ExportOutlined />
        </Space>
      ),
    }
  ];
  const tinhTP = [
    "All location",
    "   An Giang",
    "	Kon Tum",
    "	Bà Rịa – Vũng Tàu",
    "	Lai Châu",
    "	Bắc Giang",
    "	Lâm Đồng",
    "	Bắc Kạn",
    "   Lạng Sơn",
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
  return (
    <>
      {
        showResume &&
        <Drawer
          width={"80%"}
          title="View CV"
          placement="left"
          closable={false}
          onClose={() => setShowResume(false)}
          visible={showResume}
          style={{ position: 'absolute' }}
        >
          <ViewResume dataResume={dataSelected} />
        </Drawer>
      }
      <Card className="shadow" style={{ margin: "50px 100px" }}>
        <Row>
          <Col span={9}>
            <h6>Profile content</h6>
          </Col>
          <Col>
            <h6>Location</h6>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Input style={{ height: 35 }} name="tag" onChange={handleChange} />
          </Col>
          <Col span={8} offset={1}>

            <Select defaultValue={"All location"} onChange={e => setSearch({ ...search, location: e.toString() })}>
              {tinhTP.map((e, i) => {
                return (
                  <Select.Option key={i} value={e}>
                    {e}
                  </Select.Option>
                );
              })}
            </Select>

          </Col>
          <Col span={5} offset={1}>
            <Button
              type="primary"
              style={{ width: "100%", height: 35 }}
              icon={<SearchOutlined />}
              onClick={handleFind}
            >
              Find
            </Button>
          </Col>
        </Row>
      </Card>
      <Card
        title={`We found ${resumes.length} resumes matching your search criteria`}
        className="shadow"
        style={{ margin: "50px 100px" }}
        headStyle={headCardStyle}
      >      
        <Table
          id="table-to-xls"
          columns={columns}
          dataSource={resumes}
          style={{ border: "1px solid #fff888" }}
        />
      </Card>
    </>
  );
}

export default FindResume;
