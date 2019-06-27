import React, { Component } from "react";
import Messages from "../assets/messages.png";
import Logo from "../assets/01_logo.png";
import classNames from "classnames/bind";
import styles from "./Splash.module.scss";

const cx = classNames.bind(styles);

class Splash extends Component {
  componentDidMount() {
    this.id = setTimeout(() => {
      const { history } = this.props;
      sessionStorage.setItem("isSplash", true);
      history.replace("/main");
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return (
      <div className={cx("splash")}>
        <img className={cx("logo")} src={Logo} alt="로고" />
        <img className={cx("background")} src={Messages} alt="메시지" />
      </div>
    );
  }
}

export default Splash;
