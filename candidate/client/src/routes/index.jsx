import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainCandidate from '../containers/layout/MainCandidate/MainCandidate';
import PrivateRouter from '../customRouter/PrivateRouter';
import Course from '../pages/course/Course';
import JobFeed from '../pages/JobFeed';
import HomePage from '../pages/homePage';
import IndustryList from '../pages/industryList/IndustryList';
import JobAlert from '../pages/jobAlert/JobAlert';
import Login from '../pages/login';
import Register from '../pages/register';
import ForgotPassword from '../pages/ForgotPassword'

//company
import Jobs from '../pages/jobs'
import Company from '../pages/companys';
import NhaTuyenDung from '../pages/nhatuyendung';
import MainCompany from '../containers/layout/MainCompany/MainCompany';
import CompanyLogin from '../pages/companyAuth/Login'
import CompanyRegister from '../pages/companyAuth/Register'
import CreateJob from '../pages/createJobPost/CreateJob'
import ManageJob from '../pages/manageJobPost/ManageJob'
import PageRender from '../customRouter/PageRender';
import { useSelector } from 'react-redux';
import ActivationEmail from '../pages/ActivationEmail';
import CVBuilder from '../pages/cvBuilder/CVBuilder';
import ActivationEmailEmployer from '../pages/companyAuth/ActivationEmailCompany';
import DetailJobPost from '../pages/detailJobPost/DetailJobPost'
import FindResume from '../pages/findResume/FindResume'
import Dashboard from '../pages/dashboardCompany/Dashboard';


function Routes() {
    const { auth } = useSelector(state => state)

    return (
        <Switch>
            <Route path={"/company"}>
                <MainCompany>
                    <Switch>
                        <Route exact path={"/company/contact-us"} />
                        <Route exact path={"/company/find-resume"} component={FindResume} />
                        <Route exact path={"/company/detail-job/:id"} component={DetailJobPost} />
                        <Route exact path={"/company/activate/:activation_token"} component={ActivationEmailEmployer} />
                        <Route exact path={"/company/manage-job"} component={ManageJob} />
                        <Route exact path={"/company/create-job"} component={CreateJob} />
                        <Route exact path={"/company/dashboard"} component={Dashboard} />
                        <Route exact path={"/company/register"} component={CompanyRegister} />
                        <Route exact path={"/company/login"} component={CompanyLogin} />
                        <Route exact path={"/company"} component={NhaTuyenDung} />
                        <PrivateRouter exact path={"/company/job-feed"} component={auth.token ? JobFeed : Login} />
                        <PrivateRouter exact path="/company/:page" component={PageRender} />
                        <PrivateRouter exact path="/company/:page/:id" component={auth.user ? PageRender : Login} />
                    </Switch>
                </MainCompany>
            </Route>
            <Route path={"/"}>
                <MainCandidate>
                    <Switch>

                        <PrivateRouter path={"/cv-builder"} component={auth.token ? CVBuilder : Login} />
                        <Route path={"/activate/:activation_token"} component={ActivationEmail} />
                        <Route path={"/companies"} component={Company} />
                        <Route path={"/jobs"} component={Jobs} />
                        <Route path={"/jobs/:search"} component={Jobs} />
                        <PrivateRouter exact path={"/job-feed"} component={auth.token ? JobFeed : Login} />
                        <Route exact path={"/course"} component={Course} />
                        <Route exact path={"/job-alert"} component={JobAlert} />
                        <Route exact path={"/industry-list"} component={IndustryList} />
                        <Route exact path={"/register"} component={Register} />
                        <Route exact path={"/login"} component={Login} />
                        <Route exact path={"/forgot_password"} component={ForgotPassword} />
                        <Route exact path={"/"} component={HomePage} />
                        <PrivateRouter exact path="/:page" component={PageRender} />
                        <PrivateRouter exact path="/:page/:id" component={auth.user ? PageRender : Login} />
                    </Switch>
                </MainCandidate>
            </Route>
        </Switch>
    );
}


export default Routes;