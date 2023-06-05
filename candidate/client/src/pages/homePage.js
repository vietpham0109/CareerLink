import React, { useEffect } from 'react'
import Bannner from '../components/homePage/Banner/Banner'
import Evaluate from '../components/homePage/Evaluate/Evaluate'
import JobIndustry from '../components/homePage/JobIndustry/JobIndustry'
import JobType from '../components/homePage/JobType/JobType'
import TopCompany from '../components/homePage/TopCompany/TopCompany'

const HomePage = () => {

    let scroll = 0;
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: scroll, behavior: 'smooth' })
        }, 100)
    }, [])

    return (<>
        <Bannner />
        <TopCompany />
        <JobType />
        <JobIndustry />
        <Evaluate />
    </>
    )

}

export default HomePage
