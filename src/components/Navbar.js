import React from 'react';
import { Menu } from 'antd';
import {Link} from "react-router-dom";
import { Helmet } from "react-helmet";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";

const { SubMenu }  = Menu;
const logo = require("../assets/textLogo.png");

const cx = classNames.bind(styles);
const etcBtn = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png";

const Navbar = () => {
  return(
    <div>
      <Helmet>
        <title>GlassWill</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
      </Helmet>
      <Menu mode="horizontal">
        <Menu.Item style={{marginLeft: 135}} className={cx('rmBorder')}>
          <img src={logo} className={cx('logo')} alt=''/>
        </Menu.Item>
        <SubMenu title={
          <span className="submenu-title-wrapper">
            <img src={etcBtn} width={20} style={{marginLeft: 65, marginBottom: 5}} alt=''/>
          </span>
        } className={cx('rmBorder')}>
          <Menu.Item className={cx('item')} key="writings"><Link to="/">띄운 유리병</Link></Menu.Item>
          <Menu.Item className={cx('item')} key="takings"><Link to="/">회수한 유리병</Link></Menu.Item>
          <Menu.Item className={cx('item')} key="take"><Link to="/">유리병 띄우기</Link></Menu.Item>
          <Menu.Item className={cx('item')} key="login"><Link to="/login">로그인</Link></Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Navbar;