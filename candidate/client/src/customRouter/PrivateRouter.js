import { Route } from 'react-router-dom'

const PrivateRouter = (props) => {
    const firstLogin = localStorage.getItem('firstLogin')
    return <Route {...props} />
}

export default PrivateRouter
