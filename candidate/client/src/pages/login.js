import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const [typePass, setTypePass] = useState(false);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (auth.token && !auth.user?.company) history.push("/");
  }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  return (
    <div className="split-screen">
      <div className="left">
        <section className="copy">
          <h1>{t("WelcometoCVLibrary")}</h1>
          <p>{t("Over1000Rusumerealwithyou")}</p>
        </section>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <section className="copy">
            <h2>{t("Login")}</h2>
            <div className="login-container">
              <p>
                {t("Youdonthaveanaccount")}{" "}
                <Link to="/register">
                  <strong>{t("RegisterNow")}</strong>
                </Link>
              </p>
            </div>
          </section>
          <div className="input-container email">
            <label htmlFor="InputEmail">Email</label>
            <input
              type="email"
              id="InputEmail"
              name="email"
              aria-describedby="emailHelp"
              onChange={handleChangeInput}
              value={email}
              placeholder="Email@rankwork.com"
            />
          </div>
          <div className="input-container password">
            <label htmlFor="InputPassword">{t("Password")}</label>
            <input
              type={typePass ? "text" : "password"}
              id="InputPassword"
              onChange={handleChangeInput}
              value={password}
              name="password"
              placeholder="••••••••••••"
            />
            <small className="show-pass" onClick={() => setTypePass(!typePass)}>
              {typePass ? t("Hide") : t("Show")}
            </small>
          </div>
          <div className="forgot">
            <Link to="/forgot_password">{t("Forgotpassword")}</Link>
          </div>
          <button
            type="submit"
            className="signup-btn"
            disabled={email && password ? false : true}
          >
            {t("Login")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
