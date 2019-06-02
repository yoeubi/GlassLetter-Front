import React, { useState } from "react";
import Navbar from "./Navbar";
import Logo from "../assets/ImgTextLogo.png";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

const cx = classNames.bind(styles);

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSumbit = async e => {
    e.preventDefault();
    try {
      await Auth.signIn(username, password);
      const { history } = props;
      history.replace("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Navbar />
      <img src={Logo} className={cx("logo")} alt="" />
      <h1 className={cx("title")}>로그인</h1>
      <div className={cx("userForm")}>
        <form onSubmit={onSumbit}>
          <input
            name="username"
            placeholder="이름"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <p className={cx("signUp")}>
            <Link to={"/signup"}>회원이 아니신가요?</Link>
          </p>
          <button className={cx("submit")}>로그인</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
