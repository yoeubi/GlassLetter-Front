import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./SentGlass.module.scss";
import axios from "axios";
import { Auth } from "aws-amplify";
import { getmessage, userId } from "../request/sendMessage";

const cx = classNames.bind(styles);

class SentGlass extends Component {
  state = {
    list: []
  };
  async componentDidMount() {
    // const user = await Auth.currentAuthenticatedUser();
    // const { data } = await axios.get(
    //   "http://localhost:5000/viewmessage?user_id=" + user.userDataKey
    // );
    const data = await getmessage(userId);
    this.setState({
      list: data
    });

    console.log(data);
  }

  render() {
    return (
      <div>
        <div className={cx("title")}>내가 보낸 유리병</div>
        <div className={cx("content-wrapper")}>
          {this.state.list.map((item, index) => (
            <div className={cx("message")} key={index}>
              <div className={cx("content")}>
                {item.target.map((t, idx) => (
                  <div className={cx("to")} key={idx}>
                    To. {t.name}
                  </div>
                ))}
                <div
                  className={cx("text")}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
                <div className={cx("date")}>{item.date}</div>
              </div>
              <div className={cx("btn-wrapper")}>
                <button>수정</button>
                <button>삭제</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SentGlass;
