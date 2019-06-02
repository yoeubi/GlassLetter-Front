import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./SentGlass.module.scss";

const cx = classNames.bind(styles);

class SentGlass extends Component {
  render() {
    return (
      <div>
        <div className={cx("title")}>내가 보낸 유리병</div>
        <div className={cx("content-wrapper")}>
          <div className={cx("message")}>
            <div className={cx("content")}>
              <div className={cx("to")}>To. 수정</div>
              <div className={cx("text")}>
                너가 나에게 했던 위로, 잊지 못할 거야!
              </div>
              <div className={cx("date")}>2018.06.03</div>
            </div>
            <div className={cx("btn-wrapper")}>
              <button>수정</button>
              <button>삭제</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SentGlass;
