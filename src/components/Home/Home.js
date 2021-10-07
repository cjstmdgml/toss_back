import React from "react";
import classNames from "classnames";
import style from "./Home.scss";
import logo from "../../assets/icon/logo.svg";

const cx = classNames.bind(style);

const Home = ({ goLogin, goSignUp }) => {
  return (
    <div className={cx("Home")}>
      <div className={cx("Home-top")}>
        <div className={cx("Home-top-img")}>
          <img src={logo} alt="" />
        </div>
        <div className={cx("Home-top-logo")}>toss</div>
      </div>
      <div className={cx("Home-bottom")}>
        <button className={cx("Home-bottom-loginBtn")} onClick={goLogin}>
          로그인
        </button>
        <button className={cx("Home-bottom-signUpBtn")} onClick={goSignUp}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Home;
