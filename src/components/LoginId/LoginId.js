import React from "react";
import classNames from "classnames";
import style from "./LoginId.scss";
import arrow from "../../assets/icon/arrow.svg";

const cx = classNames.bind(style);

const LoginId = ({ goBack, goLogin }) => {
  return (
    <div className={cx("LoginId")}>
      <div className={cx("LoginId-top")}>
        <div className={cx("LoginId-top-img")} onClick={goBack}>
          <img src={arrow} alt="" />
        </div>
        <div className={cx("LoginId-top-text")}>
          비밀번호가 일치하면
          <br />
          로그인합니다.
        </div>
      </div>
      <div className={cx("LoginId-mid")}>
        <div className={cx("LoginId-mid-text")}>아이디</div>
        <input type="text" className={cx("LoginId-mid-input")} />

        <div className={cx("LoginId-mid-text")}>비밀번호</div>
        <input type="text" className={cx("LoginId-mid-input")} />

        <button className={cx("LoginId-mid-btn")} onClick={goLogin}>
          간편인증번호로 로그인
        </button>
      </div>
      <div className={cx("LoginId-bottom")}>
        <button className={cx("LoginId-bottom-btn")}>로그인</button>
      </div>
    </div>
  );
};

export default LoginId;
