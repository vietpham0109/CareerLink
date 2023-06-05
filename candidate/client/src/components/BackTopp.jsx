import React from 'react'
import { VerticalAlignTopOutlined } from '@ant-design/icons'
import { BackTop } from 'antd';

const style = {
    height: 45,
    width: 45,
    lineHeight: '45px',
    borderRadius: '50%',
    backgroundColor: '#5a82a3',
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
};

function BackTopp() {

    return (
        <BackTop>
            <div style={style}><VerticalAlignTopOutlined /></div>
        </BackTop>
    )
}

export default BackTopp