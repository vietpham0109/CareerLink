import React, { useEffect, useState } from "react";
import {
  Table,
  Space,
  Modal,
  Form,
  Input,
  message,
} from "antd";
import "antd/dist/antd.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./manager.scss";
import axios from "axios";

const url = "http://localhost:4000/api"

function ManageUser(props) {
  const [form] = Form.useForm();
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}/get-company`)
        const newArr = []
        res.data.map(element => newArr.push({ ...element, email: element.idCompany?.email }))
        setCompanies(newArr)
      } catch (error) {

      }
    }
    fetchData()
  }, [])

  const style = {
    cursor: "pointer",
  };
  const columns = [
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      key: "phone",
    },
    {
      title: "Size",
      dataIndex: "companySize",
      key: "size",
    },
    {
      title: "Tax Code",
      dataIndex: "taxCode",
      key: "taxCode",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <span>
            <EditOutlined style={style} onClick={() => handleEdit(text)} />
          </span>
          <span>
            <DeleteOutlined
              style={style}
              onClick={() => handleDelete(text.key)}
            />
          </span>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      companyName: "Rikkei Soft",
      email: "rikkeiSoft@gmail.com",
      phone: "0123456789",
      size: "500",
      contactName: "asdjhwqkj",
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      companyName: "FPT Soft",
      email: "FPTSoft@gmail.com",
      phone: "0123456789",
      size: "500",
      contactName: "asdjhwqkj",
      address: "New York No. 1 Lake Park",
    },
    {
      key: "3",
      companyName: "Viet Soft",
      email: "VietSoft@gmail.com",
      phone: "0123456789",
      size: "500",
      contactName: "asdjhwqkj",
      address: "New York No. 1 Lake Park",
    },
    {
      key: "4",
      companyName: "Viet Soft",
      email: "VietSoft@gmail.com",
      phone: "0123456789",
      size: "500",
      contactName: "asdjhwqkj",
      address: "New York No. 1 Lake Park",
    },
    {
      key: "5",
      companyName: "Viet Soft",
      email: "VietSoft@gmail.com",
      phone: "0123456789",
      size: "500",
      contactName: "asdjhwqkj",
      address: "New York No. 1 Lake Park",
    },
    {
      key: "6",
      companyName: "Viet Soft",
      email: "VietSoft@gmail.com",
      phone: "0123456789",
      size: "500",
      contactName: "asdjhwqkj",
      address: "New York No. 1 Lake Park",
    },
  ];
  const handleDelete = (key) => {
    if (window.confirm("Delete Company here !!!!") === true) {
      const newDataSource = [...data];
      const a = newDataSource.filter((item) => item.key !== key);
      message.info("Delete Here!!!");
    }
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [valuesEdit, setValuesEdit] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
    form.resetFields();
  };

  const handleOk = () => {
    setIsModalVisible(false);
    message.info("Update Here!!!");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleEdit = ({ key, ...rest }) => {
    setValuesEdit(rest);
    showModal();
  };

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <div
        className="container-bgr"
        style={{
          background: 'linear-gradient(87deg, #11cdef 0, #1171ef 100%)',
          height: "100px",
          width: "100hv",
        }}
      ></div>
      <div
        style={{
          border: "1px solid #ccc",
          margin: " 20px 40px",
          borderRadius: "10px",
        }}
      >
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h1 style={{ fontSize: "34px", fontWeight: "bold" }}>
            List Companies
          </h1>
        </div>
        <Table
          className="table-container"
          columns={columns}
          dataSource={companies}
          pagination={{ pageSize: 4 }}
          style={{ margin: "10px" }}
          onRow={(r) => ({
            onClick: () => console.log("bbbbbbb"),
          })}
        />
        <Modal
          title="Edit Company"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={{ htmlType: "submit", form: "editForm" }}
        >
          <Form
            form={form}
            id="editForm"
            layout="vertical"
            name="form_in_modal"
            onFinish={onFinish}
          >
            <Form.Item label="Company Name" name="companyName">
              <Input
                size="large"
                placeholder={valuesEdit.companyName}
                allowClear
              />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input size="large" placeholder={valuesEdit.email} allowClear />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input size="large" placeholder={valuesEdit.phone} allowClear />
            </Form.Item>
            <Form.Item label="Contact Name" name="contactName">
              <Input
                size="large"
                placeholder={valuesEdit.contactName}
                allowClear
              />
            </Form.Item>
            <Form.Item label="Address" name="address">
              <Input size="large" placeholder={valuesEdit.address} allowClear />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default ManageUser;
