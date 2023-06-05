import React, { useEffect, useState } from "react";
import { Table, Space, Modal, Form, Button, Select, Drawer } from "antd";
import { SelectOutlined, EditOutlined } from "@ant-design/icons";
import { getDataAPI } from "../../utils/fetchData";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { set_status } from '../../redux/actions/resumeAction'
import ViewResume from './ViewResume'

const { Option } = Select;

function TableResume(props) {

    const { t } = useTranslation();
    const { auth, socket, alert } = useSelector((state) => state);
    const [resumes, setResumes] = useState([]);
    const { id } = useParams()
    const [visible, setVisible] = useState(false)
    const [dataSelected, setData] = useState("")
    const [showResume, setShowResume] = useState(false)
    const dispatch = useDispatch()

    const handleShowEdit = (record) => {
        setData(record)
        setVisible(true)
    }
    const handleEdit = (values) => {
        dispatch(set_status({ idJob: id, idCV: dataSelected.idCV, ...values, idCandidate: dataSelected.idCandidate, auth, socket }))
        setVisible(false)
    }

    const handleShowResume = (record) => {
        setData(record.dataCV)
        setShowResume(true)
    }

    const columns = [
        {
            title: t("First name"),
            dataIndex: "first_name",
        },
        {
            title: t("Last name"),
            dataIndex: "last_name",
        },
        {
            title: t("phone"),
            dataIndex: "phone",
        },
        {
            title: t("Date submited"),
            dataIndex: "dateSubmit",
        },
        {
            title: t("Status"),
            dataIndex: "status",
        },
        {
            title: "Action",
            render: (text, record) => (
                <Space size="middle">
                    <SelectOutlined onClick={() => handleShowResume(record)} />
                    <EditOutlined onClick={() => handleShowEdit(record)} />
                </Space>
            ),
        },
    ];



    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getDataAPI(`get_submited_for_company/${id}`, auth.token)
                let newArr = []
                res.data.map(element => {
                    newArr = [...newArr, { ...element, "first_name": element.dataCV?.first_name, "last_name": element.dataCV?.last_name, "phone": element.dataCV?.phone }]
                })
                console.log(newArr)
                setResumes(newArr)
            } catch (error) {

            }
        }
        fetchData()
    }, [alert.success])

    return (
        <>
            {
                visible &&
                <Modal title="Set status" visible={visible} onCancel={() => setVisible(false)} footer={[]}>
                    <Form layout="Status" onFinish={handleEdit}>
                        <Form.Item name={"status"} initialValue={dataSelected.status} label={"Status"}>
                            <Select>
                                <Option value="Waiting">Waiting</Option>
                                <Option value="Accept">Accept</Option>
                                <Option value="Refuse">Refuse</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 8, offset: 9 }}>
                            <Button htmlType="submit" type="primary" style={{ marginRight: "7px" }}>Update</Button>
                            <Button type="primary" onClick={() => setVisible(false)}>Cancel</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            }
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

            <Table
                columns={columns}
                dataSource={resumes}
                pagination={{ pageSize: 4 }}
                
                bordered
            />
        </>
    );
}

export default TableResume;