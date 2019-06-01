import React, { useState } from "react";
import Logo from "../assets/largeLogo.png";
import classNames from "classnames/bind";
import styles from "./Main.module.scss";
import {sendtext,sendmultipart} from "../request/sendMessage"
import { Auth } from "aws-amplify";
import Navbar from "./Navbar";

const cx = classNames.bind(styles);

const Main = () => {
  const [text, setText] = useState("");
  const onSubmit = async e => {
    const data = e.target.elements.myfile['files'][0]
    e.preventDefault();
    var formData = new FormData()
    formData.append("data",data)

    const result = await sendmultipart("a","b",formData)
    console.log(result);
  };
  return (
    <div>
      <Navbar/>
      <div className={cx("logo-wrapper")}>
        <img src={Logo} alt="로고" />
      </div>
      <div className={cx("text-wrapper")}>
        <form action="" onSubmit={onSubmit}>
         <input type="file" name="myfile"></input>
          <textarea onChange={e => setText(e.target.value)} value={text} />
          <button>등록</button>
        </form>
      </div>
    </div>
  );
};

export default Main;
