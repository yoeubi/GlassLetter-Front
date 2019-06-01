import React, { useState } from "react";
import Logo from "../assets/largeLogo.png";
import classNames from "classnames/bind";
import styles from "./Main.module.scss";
import axios from "axios";
import { Auth } from "aws-amplify";

const cx = classNames.bind(styles);

const Main = () => {
  const [text, setText] = useState("");
  const onSubmit = async e => {
    e.preventDefault();
    console.log(111);
    const user = await Auth.currentAuthenticatedUser();
    console.log(user.username);
    const result = await axios.post("http://localhost:5000/register", {
      username: user.username
    });
    console.log(result);
  };
  return (
    <div>
      <div className={cx("logo-wrapper")}>
        <img src={Logo} alt="로고" />
      </div>
      <div className={cx("text-wrapper")}>
        <form action="" onSubmit={onSubmit}>
          <textarea onChange={e => setText(e.target.value)} value={text} />
          <button>등록</button>
        </form>
      </div>
    </div>
  );
};

export default Main;
