import React, { useState, useEffect  } from 'react';
import { useSelector } from 'react-redux';
import FormUpdate from '../../components/updateResume/FormUpdate';
import { useParams } from 'react-router-dom';
import { getDataAPI } from '../../utils/fetchData';



const UpdateResume = () => {
    const { auth } = useSelector(state => state)
    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getDataAPI(`get-resume-by-id/${id}`, auth.token)
                setData(res.data)
            } catch (error) {
                console.log("FAIL")
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <FormUpdate dataResume={data} />
        </div>
    );
}

export default UpdateResume
