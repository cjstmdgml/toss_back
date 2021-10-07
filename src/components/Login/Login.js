import React from "react";
import classNames from "classnames";
import style from "./Login.scss";
import arrow from "../../assets/icon/arrow.svg";
import Input from "../Input";

const cx = classNames.bind(style);

const Login = ({ goBack, goIdLogin }) => {
  return (
    <div className={cx("Login")}>
      <div className={cx("Login-top")}>
        <div className={cx("Login-top-img")} onClick={goBack}>
          <img src={arrow} alt="" />
        </div>
        <div className={cx("Login-top-text")}>
          비밀번호가 일치하면
          <br />
          로그인합니다.
        </div>
      </div>
      <div className={cx("Login-mid")}>
        <Input />
      </div>
      <div className={cx("Login-bottom")}>
        <button className={cx("Login-bottom-btn")}>로그인</button>
        <button className={cx("Login-bottom-changeBtn")} onClick={goIdLogin}>
          아이디로 로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
