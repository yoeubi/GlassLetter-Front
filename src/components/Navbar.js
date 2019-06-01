import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";

const { SubMenu } = Menu;
const logo = require("../assets/smallLogo.png");
const cx = classNames.bind(styles);

const Navbar = () => {
  return (
    <div>
      <Helmet>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
      </Helmet>
      <Menu mode="horizontal">
        <SubMenu
          style={{ marginLeft: 160 }}
          title={
            <span className="submenu-title-wrapper">
              <img src={logo} className={cx("logo")} alt="" />
            </span>
          }
        >
          <Menu.Item className={cx("item")} key="writings">
            <Link to="/">띄운 유리병</Link>
          </Menu.Item>
          <Menu.Item className={cx("item")} key="takings">
            <Link to="/">회수한 유리병</Link>
          </Menu.Item>
          <Menu.Item className={cx("item")} key="take">
            <Link to="/">유리병 담기</Link>
          </Menu.Item>
          <Menu.Item className={cx("item")} key="login">
            <Link to="/login">로그인</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Navbar;
