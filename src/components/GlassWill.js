import React from "react";
import classNames from "classnames/bind";
import styles from "./GlassWill.module.scss";
import SeaLetter from "../assets/see-letter.png";
import TextLogo from "../assets/textLogo.png";

const cx = classNames.bind(styles);

const GlassWill = () => {
  return (
    <div>
      <div className={cx("image-wrapper")}>
        <img src={SeaLetter} alt="바닷가 해변" />
      </div>
      <div className={cx("title")}>나에게 도착한 유리병</div>
      <div className={cx("will-wrapper")}>
        <div className={cx("will")}>
          <div className={cx("content")}>
            너가 나에게했던 위로, 잊지 못할 거야
          </div>
          <div className={cx("date")}>2018.06.27 채현</div>
        </div>
        <div className={cx("will")}>
          <div className={cx("content")}>
            누군가에게 남기고 싶은 말이 있다면...
          </div>
          <div className={cx("logo-wrapper")}>
            <img src={TextLogo} alt="로고" />
          </div>
        </div>
        <div className={cx("join-wrapper")}>
          <button>가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default GlassWill;
