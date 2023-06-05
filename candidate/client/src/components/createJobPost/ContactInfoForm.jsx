import React from 'react';
import { Form, Input, Typography, Button } from 'antd'
import { useDispatch } from 'react-redux';
import { createJobPost } from '../../redux/actions/listJobAction';
import { useTranslation } from 'react-i18next';

const { Item } = Form;
const { Title } = Typography;

function ContactInfoForm({ dataPost, setDataPost, setKeyTab }) {
    const { t } = useTranslation()

    const dispatch = useDispatch();

    const onCreate = (values) => {
        const data = { ...dataPost, ...values }
        dispatch(createJobPost(data))
    }

    return (
        <Form layout='vertical' initialValues={dataPost.contact_info} onFinish={onCreate}>
            <Title level={3} style={{ background: "#f1f8fe", paddingLeft: "10px" }}>{t('ContactInfomation')} </Title>
            <div className='row'>
                <div className='col-6'>
                    <Item label={t("Contactname")} name={"contact_name"}>
                        <Input size='large' />
                    </Item>
                    <Item label={t("Contactaddress")} name={"contact_address"}>
                        <Input size='large' />
                    </Item>
                </div>
                <div className='col-6'>
                    <Item label={t("Contactphone")} name={"contact_phone"}>
                        <Input size='large' />
                    </Item>
                    <Item label={t("Contactemail")} name={"contact_email"}>
                        <Input size='large' />
                    </Item>
                </div>
            </div>
            <Item wrapperCol={{ span: 8, offset: 10 }}>
                <Button size='large' type='primary' style={{ marginRight: "20px" }} htmlType='submit'>{t('CreateJob')} </Button>
                <Button size='large' type='primary' onClick={() => setKeyTab("1")}>{t('Back')} </Button>
            </Item>
        </Form>
    );
}

export default ContactInfoForm;