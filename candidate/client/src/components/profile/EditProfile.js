import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkImage } from '../../utils/imageUpload'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { updateProfileUser } from '../../redux/actions/profileAction'
import { Form, Input, Button, Select } from 'antd';
import { useTranslation } from "react-i18next";

const EditProfile = () => {
    const [avatar, setAvatar] = useState('')
    const { t } = useTranslation();
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    const changeAvatar = (e) => {
        const file = e.target.files[0]

        const err = checkImage(file)
        if (err) return dispatch({
            type: GLOBALTYPES.ALERT, payload: { error: err }
        })

        setAvatar(file)
    }


    const handleSubmit = values => {
        dispatch(updateProfileUser({ userData: values, avatar, auth }))
    }

    return (
        <div className="edit-profile">
            <Form
                layout='vertical'
                initialValues={auth.user}
                onFinish={handleSubmit}>
                <div className='row'>
                    <div className='col-4'>
                        <div className="info_avatar">
                            <img src={avatar ? URL.createObjectURL(avatar) : auth.user?.avatar}
                                alt="avatar" />
                            <span>
                                <i className="fas fa-camera" />
                                <p>{t('Change')}</p>
                                <input type="file" name="file" id="file_up"
                                    accept="image/*" onChange={changeAvatar} />
                            </span>
                        </div>
                    </div>
                    <div className='col-4'>
                        <Form.Item label="Email" name="email">
                            <Input className='css-input' disabled />
                        </Form.Item>
                        <Form.Item label="First Name" name="firstname">
                            <Input className='css-input' placeholder="Input First Name" />
                        </Form.Item>

                        <Form.Item label="Address" name="address">
                            <Input className='css-input' placeholder="Input Address" />
                        </Form.Item>
                    </div>
                    <div className='col-4'>
                        <Form.Item label="Gender" name={"gender"}>
                            <Select className='css-input'>
                                <Select.Option value="Male">Male</Select.Option>
                                <Select.Option value="Female">Female</Select.Option>
                                <Select.Option value="Other">Other</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Last Name" name="lastname">
                            <Input className='css-input' placeholder="Input Last Name" />
                        </Form.Item>
                        <Form.Item label="Phone number" name="mobile">
                            <Input className='css-input' placeholder="Input Phone Number" />
                        </Form.Item>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-8 offset-4'>
                        <Form.Item label="Introduction" name={"introduction"}>
                            <Input.TextArea placeholder="Input Introduction" style={{height: 100}}/>
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 10,
                                span: 8,
                            }}
                        >
                            <Button type="primary" htmlType="submit" size='large'>
                               {t('SaveChanges')} 
                            </Button>
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default EditProfile
