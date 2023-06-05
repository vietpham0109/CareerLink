import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Steps, Button, Row, Col } from "antd";
import Step1 from "../../components/cvBuilder/Step1";
import Step2 from "../../components/cvBuilder/Step2";
import Step3 from "../../components/cvBuilder/Step3";
import Step4 from "../../components/cvBuilder/Step4";
import { createResume } from "../../redux/actions/resumeAction";
import { useTranslation } from "react-i18next";

const { Step } = Steps;

function BuildCV() {
    const { t } = useTranslation();
    const steps = [
        {
            title: t("Choosecvtemplate"),
            content: <Step1 />,
        },
        {
            title: t("DesignCV"),
            content: <Step2 />,
        },
        {
            title: t("Infomation"),
            content: <Step3 />,
        },
        {
            title: t("Complete"),
            content: <Step4 />,
        },
    ];

    const [current, setCurrent] = useState(0);
    const [dataResume, setDataResume] = useState({})
    const [avatar, setAvatar] = useState(null)
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    const next = () => {
        const btn = document.querySelector(".submit-btn-none");
        if (btn) {
            btn.click();
        }
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    const handleCreateCv = () => {
        dispatch(createResume(dataResume, avatar, auth.token))
    }
    return (
        <div style={{ padding: "16px 0", backgroundColor: "rgba(0,0,0,0.05)" }} onLoad={window.scrollTo({ top: 0, behavior: 'smooth' })} >
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <div
                        className="steps-action"
                        style={{ float: "right", margin: "12px 0" }}
                    >
                        {current > 0 && (
                            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                                {t('Previous')}
                            </Button>
                        )}
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                {t('Next')}
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button
                                type="primary"
                                onClick={handleCreateCv}
                            >
                                {t('Done')}
                            </Button>
                        )}
                    </div>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <div>
                        <Steps current={current}>
                            {steps.map((item) => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                        <div className="steps-content">
                            {
                                current === 0 && <Step1 />
                            }
                            {
                                current === 1 && <Step2 />
                            }
                            {
                                current === 2 && <Step3
                                    dataResume={dataResume} setDataResume={setDataResume}
                                    avatar={avatar} setAvatar={setAvatar} />
                            }
                            {
                                current === 3 && <Step4
                                    dataResume={dataResume}
                                    avatar={avatar} />
                            }
                        </div>
                    </div>
                </Col>
                <Col span={2}></Col>
            </Row>
        </div>
    );
}

export default BuildCV;
