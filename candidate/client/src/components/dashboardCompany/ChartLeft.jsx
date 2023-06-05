import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Pie } from '@ant-design/plots';
import { getDataAPI } from '../../utils/fetchData'

const data = [
    {
        type: 'Part-time',
        value: 0,
    },
    {
        type: 'Full-time',
        value: 0,
    },
    {
        type: 'Intership',
        value: 0,
    },
    {
        type: 'Fresher',
        value: 0,
    },
];

function ChartLeft() {
    const { auth } = useSelector(state => state)
    const initialData = [
        {
            type: 'Part-time',
            value: 0,
        },
        {
            type: 'Full-time',
            value: 1,
        },
        {
            type: 'Intership',
            value: 0,
        },
        {
            type: 'Fresher',
            value: 0,
        },
    ];
    const [dataChart, setDataChart] = useState(initialData)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getDataAPI(`data-chart-job-type/${auth.user?.company?._id}`)
                console.log('res', res.data)
                setDataChart(res.data)
            } catch (error) {

            }
        }
        fetchData()
    }, [])

    const config = {
        appendPadding: 10,
        data: dataChart,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
            type: 'outer',
            content: '{name} {percentage}',
        },
        interactions: [
            {
                type: 'pie-legend-active',
            },
            {
                type: 'element-active',
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
                <h2>Job type chart</h2>
                <Pie {...config} />
            </div>
        </div>
    )
}

export default ChartLeft