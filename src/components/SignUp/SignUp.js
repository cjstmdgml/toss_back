import React from "react";
import classNames from "classnames";
import style from "./SignUp.scss";
import arrow from "../../assets/icon/arrow.svg";

const cx = classNames.bind(style);

const SignUp = ({ goBack }) => {
  return (
    <div className={cx("SignUp")}>
      <div className={cx("SignUp-top")}>
        <div className={cx("SignUp-top-img")} onClick={goBack}>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className={cx("SignUp-mid")}>
        <div className={cx("SignUp-mid-text")}>
          입력한 정보가 맞다면
          <br />
          아래 확인 버튼을 눌러주세요.
        </div>
        <div className={cx("SignUp-mid-id")}>
          <div className={cx("SignUp-mid-id-left")}>
            <div className={cx("SignUp-mid-id-left-text")}>아이디</div>
            <input type="text" className={cx("SignUp-mid-id-left-input")} />
          </div>
          <div className={cx("SignUp-mid-id-right")}>
            <button className={cx("SignUp-mid-id-right-btn")}>중복 확인</button>
          </div>
        </div>
        <div className={cx("SignUp-mid-pw")}>
          <div className={cx("SignUp-mid-pw-text")}>비밀번호</div>
          <input type="text" className={cx("SignUp-mid-pw-input")} />
        </div>
        <div className={cx("SignUp-mid-pn")}>
          <div className={cx("SignUp-mid-pn-text")}>전화번호</div>
          <input type="text" className={cx("SignUp-mid-pn-input")} />
        </div>
        <div className={cx("SignUp-mid-rrn")}>
          <div className={cx("SignUp-mid-rrn-text")}>주민등록번호</div>
          <input type="text" className={cx("SignUp-mid-rrn-input1")} />-
          <input type="text" className={cx("SignUp-mid-rrn-input2")} />
        </div>
        <div className={cx("SignUp-mid-name")}>
          <div className={cx("SignUp-mid-name-text")}>이름</div>
          <input type="text" className={cx("SignUp-mid-name-input")} />
        </div>
        <div className={cx("SignUp-mid-nickname")}>
          <div className={cx("SignUp-mid-nickname-left")}>
            <div className={cx("SignUp-mid-nickname-left-text")}>별명</div>
            <input type="text" className={cx("SignUp-mid-nickname-left-input")} />
          </div>
          <div className={cx("SignUp-mid-nickname-right")}>
            <button className={cx("SignUp-mid-nickname-right-btn")}>중복 확인</button>
          </div>
        </div>
        <div className={cx("SignUp-mid-photo")}>
          <div className={cx("SignUp-mid-photo-left")}>
            <div className={cx("SignUp-mid-photo-left-text")}>프로필 사진 등록</div>
          </div>
          <div className={cx("SignUp-mid-photo-right")}>
            <button className={cx("SignUp-mid-photo-right-btn")}>사진 선택</button>
          </div>
        </div>
      </div>
      <div className={cx("SignUp-bottom")}>
        <button className={cx("SignUp-bottom-btn")}>확인</button>
      </div>
    </div>
  );
};

export default SignUp;
