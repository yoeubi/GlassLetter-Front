import React from 'react';
import Navbar from "./Navbar";
import Logo from "../assets/ImgTextLogo.png";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import {Link} from "react-router-dom";

const cx = classNames.bind(styles);

const Login = () => {
  return (
    <div>
      <Navbar/>
      <img src={Logo} className={cx("logo")} alt=""/>
      <h1 className={cx("title")}>로그인</h1>
      <div className={cx("userForm")}>
        <form>
          <input name={"userId"} placeholder={"아이디"} />
          <input name={"userPassword"} type="password" placeholder={"비밀번호"} />
          <p className={cx("signUp")}><Link to={"/signup"} >회원이 아니신가요?</Link></p>
          <input type="submit" className={cx("submit")} value={"로그인"}/>
        </form>
      </div>
    </div>
  );
};

export default Login;