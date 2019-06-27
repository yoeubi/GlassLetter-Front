import React, { Component } from "react";
import Navbar from "./Navbar";
import Logo from "../assets/ImgTextLogo.png";
import classNames from "classnames/bind";
import styles from "./SignUp.module.scss";
import { Link } from "react-router-dom";
import { Checkbox } from "antd";
// import { Auth } from "aws-amplify";

const cx = classNames.bind(styles);

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    phone_number: "",
    authCode: "",
    submit: false
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  signUp = async () => {
    const { username, password, email, phone_number } = this.state;
    try {
      // await Auth.signUp({
      //   username,
      //   password,
      //   attributes: {
      //     email,
      //     phone_number: `+${phone_number}`
      //   }
      // });
      this.setState({ submit: true });
    } catch (error) {
      console.error(error);
    }
  };
  confirmSignUp = async () => {
    try {
      // await Auth.confirmSignUp(this.state.username, this.state.authCode);
      const { history } = this.props;
      history.replace("/main");
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    const {
      username,
      password,
      email,
      phone_number,
      authCode,
      submit
    } = this.state;
    return (
      <div>
        <Navbar />
        <img src={Logo} className={cx("logo")} alt="" />
        <h1 className={cx("title")}>회원 가입</h1>
        <div className={cx("userForm")}>
          <form onSubmit={e => e.preventDefault()}>
            <input
              name="username"
              placeholder="이름"
              value={username}
              onChange={this.onChange}
            />
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={this.onChange}
            />
            <input
              name="phone_number"
              placeholder="연락처"
              value={phone_number}
              onChange={this.onChange}
            />
            <input
              name="email"
              placeholder="이메일"
              value={email}
              onChange={this.onChange}
            />
            {!submit ? (
              <button className={cx("submit")} onClick={this.signUp}>
                회원 가입
              </button>
            ) : (
              <>
                <input
                  name="authCode"
                  placeholder="이메일 인증 번호"
                  value={authCode}
                  onChange={this.onChange}
                />
                <button onClick={this.confirmSignUp} className={cx("submit")}>
                  인증 번호 확인
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
