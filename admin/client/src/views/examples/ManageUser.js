import React, { useEffect, useState } from "react";
import { Table, Space, Form, Input, Modal, message } from "antd";
import "antd/dist/antd.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./manager.scss";
import axios from "axios";


const url = 'http://localhost:4000/api'
function ManageUser(props) {
  const [candidates, setCandidates] = useState([])

  const style = {
    cursor: "pointer",
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "mobile",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return (
          <Space size="middle">
            <span>
              <EditOutlined style={style} onClick={() => handleEdit(record)} />
            </span>
            <span>
              <DeleteOutlined
                style={style}
                onClick={() => handleDelete(text.key)}
              />
            </span>
          </Space>
        );
      },
    },
  ];

  const handleDelete = (key) => {

  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [valuesEdit, setValuesEdit] = useState({});


  const handleOk = () => {
    setIsModalVisible(false);
    setValuesEdit({})
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    // form.resetFields();
  };

  const handleEdit = (record) => {
    setValuesEdit(record);
    console.log(record)
    setIsModalVisible(true)
  };

  const onFinish = (values) => {
    console.log(values);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}/get-candidate`)
        setCandidates(res.data)
      } catch (error) {

      }
    }
    fetchData()
  }, [])

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
          <h1 style={{ fontSize: "34px", fontWeight: "bold" }}>List Users</h1>
        </div>
        <Table
          className="table-container"
          columns={columns}
          dataSource={candidates}
          pagination={{ pageSize: 4 }}
          style={{ margin: " 0 10px" }}
        />
        {
          isModalVisible &&
          <Modal
            title="Edit Company"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          // okButtonProps={{ htmlType: "submit", form: "editForm" }}
          >
            <Form
              // form={form}
              id="editForm"
              layout="vertical"
              name="form_in_modal"
              onFinish={onFinish}
              initialValues={valuesEdit}
            >
              <Form.Item label="First Name" name="firstname">
                <Input
                  size="large"
                  placeholder={valuesEdit.firstName}
                  allowClear
                />
              </Form.Item>
              <Form.Item label="Last Name" name="lastname">
                <Input
                  size="large"
                  placeholder={valuesEdit.lastName}
                  allowClear
                />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input size="large" placeholder={valuesEdit.email} allowClear />
              </Form.Item>
              <Form.Item label="Phone" name="mobile">
                <Input size="large" placeholder={valuesEdit.phone} allowClear />
              </Form.Item>
              <Form.Item label="Address" name="address">
                <Input size="large" placeholder={valuesEdit.address} allowClear />
              </Form.Item>
            </Form>
          </Modal>
        }
      </div>
    </>
  );
}

export default ManageUser;
