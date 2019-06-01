import React from 'react';
import Navbar from "./Navbar";
import Logo from "../assets/ImgTextLogo.png";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import {Link} from "react-router-dom";
import {Checkbox} from "antd";

const cx = classNames.bind(styles);

const SignUp = () => {
  return (
    <div>
      <Navbar/>
      <img src={Logo} className={cx("logo")} alt=""/>
      <h1 className={cx("title")}>회원 가입</h1>
      <div className={cx("userForm")}>
        <form>
          <input name={"userId"} placeholder={"아이디"} />
          <input name={"userPassword"} type="password" placeholder={"비밀번호"} />
          <input name={"userPassword"} type="password" placeholder={"비밀번호확인"} />
          <input name={"userName"} placeholder={"이름"} />
          <input name={"userPhone"} placeholder={"연락처"} />
          <input name={"userEmail"} placeholder={"이메일"} />
          <Checkbox name={"user-term"}>개인정보 약관에 동의하십니까?</Checkbox>

          <input type="submit" className={cx("submit")} value={"회원 가입"}/>
        </form>
      </div>

    </div>
  );
};

export default SignUp;