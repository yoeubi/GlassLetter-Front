import React from "react";
import Messages from "../assets/messages.png";
import Logo from "../assets/logo.png";
import classNames from "classnames/bind";
import styles from "./Splash.module.scss";

const cx = classNames.bind(styles);

const Splash = () => {
  return (
    <div className={cx("splash")}>
      <img className={cx("logo")} src={Logo} alt="로고" />
      <img className={cx("background")} src={Messages} alt="메시지" />
    </div>
  );
};

export default Splash;
