import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CV from '../../components/cvBuilder/CvStep4';
import { getDataAPI } from '../../utils/fetchData';

const ReviewResume = () => {

	const { auth } = useSelector(state => state)
	const { id } = useParams()
	const [resume, setResume] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			const res = await getDataAPI(`get-resume-by-id/${id}`, auth.token)
			setResume(res.data)
		}
		fetchData()
	}, [])

	return (
		<div style={{ background: '#0000000d' }}>
			<div className='container pt-5 pb-2'>
				<CV dataResume={resume} />
			</div>
		</div>
	)
}

export default ReviewResume
