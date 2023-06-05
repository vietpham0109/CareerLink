import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import { getDataAPI } from '../../utils/fetchData';
import { useSelector } from 'react-redux';




function ChartRight() {

    const initialData = [
        {
            month: 'Feb',
            resume: 0,
        },
        {
            month: 'Feb',
            resume: 0,
        },
        {
            month: 'Mar',
            resume: 0,
        },
        {
            month: 'Apr',
            resume: 0,
        },
        {
            month: 'May',
            resume: 0,
        },
        {
            month: 'Jun',
            resume: 0,
        },
        {
            month: 'Jul',
            resume: 0,
        },
        {
            month: 'Aug',
            resume: 0,
        },
        {
            month: 'Sep',
            resume: 0,
        },
        {
            month: 'Oct',
            resume: 0,
        },
        {
            month: 'Nov',
            resume: 0,
        },
        {
            month: 'Dec',
            resume: 0,
        }
    ];

    const [data, setData] = useState(initialData);
    const { auth } = useSelector(state => state)

    useEffect(() => {
        asyncFetch();
    }, []);
    const asyncFetch = async () => {
        try {
            const res = await getDataAPI(`get-resume-submited-by-month/${auth.user?._id}`)
            console.log(res.data)
            setData(res.data)
        } catch (error) {
            console.log(error.msg)
        }
    };


    const config = {
        data,
        xField: 'month',
        yField: 'resume',
        label: {},
        point: {
            size: 5,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#5B8FF9',
                lineWidth: 2,
            },
        },
        tooltip: {
            showMarkers: false,
        },
        state: {
            active: {
                style: {
                    shadowBlur: 4,
                    stroke: '#000',
                    fill: 'red',
                },
            },
        },
        interactions: [
            {
                type: 'marker-active',
            },
        ],
    };

    return (
        <div className='card shadow'
            style={{
                borderRadius: "20px",
                border: "1px solid green",
            }}>
            <div className='card-body'>
                <h2>Total resume</h2>
                <Line {...config} />
            </div>
        </div>
    )
}

export default ChartRight