import "antd/dist/antd.css"

import { useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./routes"

import { getAllJob } from "./redux/actions/listJobAction"
import { getTypeJob } from "./redux/actions/homeJobAction"
import {
  getListCompany,
  getTopCompany
} from "./redux/actions/listCompanyAction"

import Alert from "./components/alert/Alert"
import MessageAuth from "./components/header/MessageAuth"
import StatusModal from "./components/StatusModal"
import BackTopp from "./components/BackTopp"

import { useSelector, useDispatch } from "react-redux"
import { refreshToken } from "./redux/actions/authAction"
import { getPosts } from "./redux/actions/postAction"
import { getSuggestions } from "./redux/actions/suggestionsAction"

import io from "socket.io-client"
import { GLOBALTYPES } from "./redux/actions/globalTypes"
import SocketClient from "./SocketClient"

import { getNotifies } from "./redux/actions/notifyAction"
import CallModal from "./components/message/CallModal"
import Peer from "peerjs"

function App() {
  const { auth, status, modal, call } = useSelector((state) => state)
  const dispatch = useDispatch()

  let scroll = 0
  window.addEventListener("scroll", () => {
    if (window.location.pathname === "/jobs") {
      scroll = window.pageYOffset;
      return scroll;
    }
  });

  useEffect(() => {
    dispatch(refreshToken());
    dispatch(getAllJob());
    dispatch(getTypeJob());
    dispatch(getListCompany());
    dispatch(getTopCompany());

    setTimeout(() => {
      window.scrollTo({ top: scroll, behavior: "smooth" });
    }, 100);

    const socket = io();
    dispatch({ type: GLOBALTYPES.SOCKET, payload: socket });
    return () => socket.close();
  }, [dispatch, scroll]);

  useEffect(() => {
    if (auth.token) {
      dispatch(getPosts(auth.token));
      dispatch(getSuggestions(auth.token));
      dispatch(getNotifies(auth.token));
      // if (auth.isCompany) dispatch(getListSubmitedForCompany(null, auth));
      // if (auth.isAdmin) dispatch(getAllUsers(auth.token));
      // if (!auth.isAdmin && !auth.isCompany) dispatch(getListSubmited(auth));
    }
  }, [dispatch, auth.token, auth]);

  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
        }
      });
    }
  }, []);

  useEffect(() => {
    const newPeer = new Peer(undefined, {
      path: "/",
      secure: true
    });

    dispatch({ type: GLOBALTYPES.PEER, payload: newPeer });
  }, [dispatch]);

  return (
    <Router>
      <Alert />
      {/* <input type="checkbox" id="theme" /> */}
      <div className={`App ${(status || modal) && "mode"}`}>
        <BackTopp />
        <MessageAuth />
        <div>
          {status && <StatusModal />}
          {auth.token && <SocketClient />}
          {call && <CallModal />}
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
