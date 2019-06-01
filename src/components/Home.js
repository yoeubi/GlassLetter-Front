import React from 'react';
import classNames from "classnames/bind";
import styles from "./styles/Home.module.scss";
import {Link} from "react-router-dom";

const cx = classNames.bind(styles);
const logo = require('../assets/logo.png');

const Home = () => {
  return(
    <>
      <nav>
        <ul className={cx('nav-container')}>
          {/*<li className={cx('nav-item')}><Link><img src={logo}/></Link></li>*/}
          <li className={cx('nav-item')}><Link>About</Link></li>
          <li className={cx('nav-item')}><Link>Ministries</Link></li>
          <li className={cx('nav-item')}><Link>Community</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Home;