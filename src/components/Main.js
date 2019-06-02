import React, { useState } from "react";
import Logo from "../assets/largeLogo.png";
import classNames from "classnames/bind";
import styles from "./Main.module.scss";
import { Auth } from "aws-amplify";
import Navbar from "./Navbar";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Redirect } from "react-router-dom";

const cx = classNames.bind(styles);

const Main = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [userList, setList] = useState([]);
  const [text, setText] = useState(``);
  const [popup, setPopup] = useState(false);
  const [redir, setRedir] = useState(false);
  const onChange = data => {
    if (text.length < 150) {
      console.log(data);
      setText(data);
    }
  };
  const onSubmit = async e => {
    e.preventDefault();
    const user = await Auth.currentAuthenticatedUser();
    console.log(user.username);
    await axios.post("http://localhost:5000/register", {
      username: user.username
    });
  };
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link", "image"],
      ["clean"]
    ]
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image"
  ];
  Auth.currentAuthenticatedUser().catch(user => {
    setRedir(true);
  });
  if (redir) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Navbar />
      <div className={cx("logo-wrapper")}>
        <img src={Logo} alt="로고" />
      </div>
      <div className={cx("phone")} onClick={() => setPopup(true)}>
        연락처 추가하기
      </div>
      <div className={cx("text-wrapper")}>
        <form action="" onSubmit={onSubmit}>
          <ReactQuill
            onChange={onChange}
            value={text}
            modules={modules}
            formats={formats}
            placeholder={
              "ex) 엄마가 이 글을 볼때 쯤이면 아마 나는 조금 먼 곳에 있을거야, 내가 겪어보지 못 한 것들이 아쉽지만 나 대신 좋은 것들, 좋은 곳을 경험 해줘."
            }
            className={cx("editor")}
          />
          <button className={cx("plus")}>유리병 띄우기</button>
        </form>
      </div>
      {popup && (
        <div className={cx("popup-wrapper")}>
          <div className={cx("popup")}>
            <div className={cx("title")}>
              연락처 추가하기{" "}
              <span className={cx("exit")} onClick={() => setPopup(false)}>
                ✖
              </span>
            </div>
            <div className={cx("list")}>
              <ul>
                {userList.map(item => (
                  <li key={item.tel}>
                    <span className={cx("person")}>{item.name}</span>
                    <span className={cx("phonenumber")}>{item.tel}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("phone-input")}>
              <input
                type="text"
                className={cx("name")}
                placeholder="이름"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                type="tel"
                className={cx("tel")}
                placeholder="000-0000-0000"
                value={tel}
                onChange={e => setTel(e.target.value)}
              />
            </div>
            <div
              className={cx("plus-wrapper")}
              onClick={() => {
                setList(userList.concat({ name, tel }));
                setName("");
                setTel("");
              }}
            >
              +
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
