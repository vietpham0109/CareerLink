import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input, DatePicker, Drawer } from 'antd';
import moment from 'moment'
import { updateJobPost } from '../../redux/actions/listJobAction'
import { useDispatch, useSelector } from 'react-redux'

const { Item } = Form

function ModalUpdate({ dataJob, visible, setVisible }) {

    const [date, setDate] = useState(dataJob.expiring_date)
    const dispatch = useDispatch()
    const { auth } = useSelector(state => state)
    const handleCancel = () => {
        setVisible(false)
    };

    const handleOk = (values) => {
        dispatch(updateJobPost({ ...values, id: dataJob._id, expiring_date: date }, auth.token))
        setVisible(false)
    }

    return (
        <>
            <Drawer title="Update Job" placement="right"
                onClose={handleCancel}
                width={720}
                visible={visible}
                footer={[]}
            >
                <Form layout='vertical' initialValues={dataJob} name="update" id='update' onFinish={handleOk}>
                    <Item label={"Job title"} name="job_title">
                        <Input />
                    </Item>
                    <Item label={"Job description"} name="job_description">
                        <Input.TextArea style={{ minHeight: "100px" }} />
                    </Item>
                    <Item label={"Job requirement"} name="job_requirement">
                        <Input.TextArea style={{ minHeight: "100px" }} />
                    </Item>
                    <Item label="Expiring date">
                        <DatePicker value={moment(date, "MM/DD/YYYY")} format="MM/DD/YYYY" onChange={e => setDate(e)} />
                    </Item>
                    <Item label="benefit" name='benefit' >
                        <Input.TextArea style={{ minHeight: "100px" }} />
                    </Item>
                    <Item wrapperCol={{ span: 9, offset: 10 }}>
                        <Button size='large' type='primary' htmlType='submit' style={{ marginRight: "10px" }}>Update</Button>
                        <Button size='large' onClick={handleCancel}>Cancel</Button>
                    </Item>
                </Form>
            </Drawer>
        </>
    );
}

export default ModalUpdate;