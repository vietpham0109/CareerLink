import React, { useEffect, useState } from "react";
import { Table, Space, Form, Input, Modal, message } from "antd";
import "antd/dist/antd.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./manager.scss";
import axios from "axios";
import dateFormat from "dateformat";


const url = "http://localhost:4000/api"

function ManageUser(props) {
  const [form] = Form.useForm();
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}/get-jobPost`)
        const newArr = []
        res.data.map(element => {
          newArr.push({ ...element, create_date: dateFormat(element.createdAt, "paddedShortDate"), end_date: dateFormat(element.expiring_date, "paddedShortDate") })
        })
        console.log(newArr)
        setJobs(newArr)
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
      title: "Job title",
      dataIndex: "job_title",
    },
    {
      title: "Location",
      dataIndex: "working_location",
    },
    {
      title: "Create date",
      dataIndex: "create_date",
      key: "createDate",
    },
    {
      title: "End date",
      dataIndex: "end_date",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return (
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
        );
      },
    },
  ];
  const data = [
    {
      key: "1",
      companyName: "Rikkei Soft",
      jobTitle: "Fresher JavaScrip Developers",
      salary: "10-30 Million",
      createDate: "23/12/2021",
      endDate: "31/12/2021",
    },
    {
      key: "2",
      companyName: "FPT Telecom",
      jobTitle: "Aws Devops Engineer",
      salary: "10-30 Million",
      createDate: "23/12/2021",
      endDate: "31/12/2021",
    },
    {
      key: "3",
      companyName: "Rikkei Soft",
      jobTitle: "Process Quality Assurance",
      salary: "10-30 Million",
      createDate: "23/12/2021",
      endDate: "31/12/2021",
    },
    {
      key: "4",
      companyName: "FPT Telecom",
      jobTitle: "AI Engineer",
      salary: "10-30 Million",
      createDate: "23/12/2021",
      endDate: "31/12/2021",
    },
    {
      key: "5",
      companyName: "Rikkei Soft",
      jobTitle: "Nodejs/ Python Developer",
      salary: "10-30 Million",
      createDate: "23/12/2021",
      endDate: "31/12/2021",
    },
  ];
  const handleDelete = (key) => {
    if (window.confirm("Delete Post here !!!!") === true) {
      const newDataSource = [...data];
      const a = newDataSource.filter((item) => item.key !== key);
      // setData(a)
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
            Manage Post
          </h1>
        </div>
        <Table
          className="table-container"
          columns={columns}
          dataSource={jobs}
          pagination={{ pageSize: 4 }}
          style={{ margin: " 0 10px" }}
          onRow={(r) => ({
            onClick: () => console.log("bbbbbbb"),
          })}
        />
        <Modal
          title="Edit Post"
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
            <Form.Item label="Job Title" name="jobTitle">
              <Input
                size="large"
                placeholder={valuesEdit.jobTitle}
                allowClear
              />
            </Form.Item>
            <Form.Item label="Salary" name="salary">
              <Input size="large" placeholder={valuesEdit.salary} allowClear />
            </Form.Item>
            <Form.Item label="Create Date" name="createDate">
              <Input
                size="large"
                placeholder={valuesEdit.createDate}
                allowClear
              />
            </Form.Item>
            <Form.Item label="End Date" name="endDate">
              <Input size="large" placeholder={valuesEdit.endDate} allowClear />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default ManageUser;
