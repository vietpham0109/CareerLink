import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateInfoCompany } from '../../redux/actions/profileAction'
import { Form, Input, Button, Select } from 'antd';

function EditProfileCompany() {

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleSubmit = values => {
        dispatch(updateInfoCompany(values, auth.token))
    }

    return (
        <div className="edit-profile">
            <Form
                layout='vertical'
                initialValues={auth.user?.company}
                onFinish={handleSubmit}>
                <div className='row'>
                    <div className='col-4 offset-2'>
                        <Form.Item label="Website" name="website">
                            <Input className='css-input' />
                        </Form.Item>
                        <Form.Item label="Contact Address" name="address">
                            <Input className='css-input' placeholder="Input " />
                        </Form.Item>
                    </div>
                    <div className='col-4'>
                        <Form.Item label="Company size" name="size">
                            <Select className='css-input'>
                                <Select.Option value="1">0-50</Select.Option>
                                <Select.Option value="2">50-199</Select.Option>
                                <Select.Option value="3">200-1000</Select.Option>
                                <Select.Option value="4">1000-4999</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Industry" name="industry">
                            <Input className='css-input' placeholder="Input " />
                        </Form.Item>
                       
                    </div>
                </div>
                <div className='row'>
                    <div className='col-8 offset-2'>
                        <Form.Item label="Summary" name={"info"} >
                            <Input.TextArea placeholder="Input Introduction" style={{height: 100}} />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 10,
                                span: 8,
                            }}
                        >
                            <Button type="primary" htmlType="submit" size='large'>
                                Save Changes
                            </Button>
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default EditProfileCompany