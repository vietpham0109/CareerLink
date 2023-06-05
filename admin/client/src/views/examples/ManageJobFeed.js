import React, { useEffect, useState } from 'react';
import "antd/dist/antd.css";
import {
    Table,
    Space,
    Modal,
    Form,
    Input,
    message,
} from "antd";
import axios from 'axios';
import dateFormat from 'dateformat';
import {
    UnorderedListOutlined,
    DeleteOutlined
} from '@ant-design/icons';

const url = "http://localhost:4000/api"

function ManageJobFeed(props) {


    const columns = [
        {
            title: "Author",
            dataIndex: "author",
            key: "author",
        },
        {
            title: "Link post",
            dataIndex: "link",
            key: "link",
        },
        {
            title: "Date create",
            dataIndex: "dateCreate",
            key: "dateCreate",
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <Space size="middle">
                    <span>
                        <DeleteOutlined onClick={() => console.log(record)} />
                    </span>                  
                </Space>
            ),
        },
    ];

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${url}/posts`)
                const arr = res.data.posts
                const newArr = []
                arr.map(element => {
                    newArr.push({ ...element, author: element.user?.lastname, 
                        dateCreate: dateFormat(element.createdAt, "dd/mm/yyyy"),
                        link: `https://job-cap.herokuapp.com/post/${element._id}`
                     })
                })
                setPosts(newArr)
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
                    <h1 style={{ fontSize: "34px", fontWeight: "bold" }}>
                        List JobFeed
                    </h1>
                </div>
                <Table
                    className="table-container"
                    columns={columns}
                    dataSource={posts}
                    pagination={{ pageSize: 4 }}
                    style={{ margin: "10px" }}
                    onRow={(r) => ({
                        onClick: () => console.log("bbbbbbb"),
                    })}
                />
                <Modal
                    title="Edit Company"
                    // visible={isModalVisible}
                    // onOk={handleOk}
                    // onCancel={handleCancel}
                    okButtonProps={{ htmlType: "submit", form: "editForm" }}
                >
                    <Form
                    // form={form}
                    // id="editForm"
                    // layout="vertical"
                    // name="form_in_modal"
                    // onFinish={onFinish}
                    >
                        <Form.Item label="Company Name" name="companyName">
                            <Input
                                size="large"
                                // placeholder={valuesEdit.companyName}
                                allowClear
                            />
                        </Form.Item>
                        {/* <Form.Item label="Email" name="email">
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
                        </Form.Item> */}
                        {/* <Form.Item label="Address" name="address">
                            <Input size="large" placeholder={valuesEdit.address} allowClear />
                        </Form.Item> */}
                    </Form>
                </Modal>
            </div>
        </>
    );
}

export default ManageJobFeed;