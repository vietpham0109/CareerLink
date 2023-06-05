import { combineReducers } from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import alert2 from './alert2'
import theme from './themeReducer'
import profile from './profileReducer'
import status from './statusReducer'
import homePosts from './postReducer'
import modal from './modalReducer'
import detailPost from './detailPostReducer'
import discover from './discoverReducer'
import suggestions from './suggestionsReducer'
import socket from './socketReducer'
import notify from './notifyReducer'
import message from './messageReducer'
import online from './onlineReducer'
import call from './callReducer'
import peer from './peerReducer'
import homeJobReducer from './homeJobReducer'
import allJob from './listJobReducer'
import listCompany from './listCompanyReducer'
import allResume from './resumeReducer'
import dataResume from './dataResumeReducer'
import users from './usersReducer'
import topCompany from './topCompanyReducer'
import submited from './submitedReducer'

export default combineReducers({
    users,
    auth,
    alert,
    alert2,
    theme,
    profile,
    status,
    homePosts,
    modal,
    detailPost,
    discover,
    suggestions,
    socket,
    notify,
    message,
    online,
    call,
    peer,
    homeJobReducer,
    allJob,
    listCompany,
    allResume,
    dataResume,
    topCompany,
    submited
})