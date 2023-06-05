import React from 'react'
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { LockOutlined } from '@ant-design/icons';
import { change_password } from '../../redux/actions/usersAction'
import { useTranslation } from "react-i18next";

function ChangePassword() {
    const { t } = useTranslation();
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleChangePass = (values) => {
        dispatch(change_password(values, auth.token))
    }

    return (
        <Form
            onFinish={handleChangePass}
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 8,
            }}
        >
            <Form.Item
                label="Current Password"
                name="current_password"
                rules={[
                    {
                        required: true,
                        message: t('PleaseinputyourCurrentPassword'),
                    },
                    {
                        min: 6,
                        message: "Too short!"
                    }
                ]}
            >
                <Input.Password className='css-input' prefix={<LockOutlined className="site-form-item-icon" />} placeholder="••••••••••••" />
            </Form.Item>

            <Form.Item
                label="Password"
                name="new_password"
                rules={[
                    {
                        required: true,
                        message: t('PleaseinputyourPassword'),
                    },
                    {
                        min: 6,
                        message: "Too short!"
                    }
                ]}
            >
                <Input.Password className='css-input' prefix={<LockOutlined className="site-form-item-icon" />} placeholder="••••••••••••" />
            </Form.Item>
            <Form.Item
                label="Re-Password"
                name="cf_password"
                rules={[
                    {
                        required: true,
                        message: t('PleaseinputyourRePassword'),
                    },
                    {
                        min: 6,
                        message: "Too short!"
                    }
                ]}
            >
                <Input.Password className='css-input' prefix={<LockOutlined className="site-form-item-icon" />} placeholder="••••••••••••" />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 8,
                }}
            >
                <Button type="primary" htmlType="submit" size='large'>
                   {t('SaveChanges')} 
                </Button>
            </Form.Item>
        </Form>
    )
}

export default ChangePassword