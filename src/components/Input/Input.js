import React from "react";
import classNames from "classnames";
import style from "./Input.scss";

const cx = classNames.bind(style);

const point = () => {
  const result = [];
  for (let i = 0; i < 6; i++) {
    result.push(<div id={i} className={cx("Login-mid-input-point-arr")}></div>);
  }
  return result;
};

const number = () => {
  const result = [];
  for (let i = 1; i < 10; i++) {
    result.push(
      <div id={i} className={cx("Login-mid-input-number-arr")}>
        {i}
      </div>
    );
  }
  return result;
};

const Input = () => {
  return (
    <div className={cx("Login-mid-input")}>
      <div className={cx("Login-mid-input-point")}>{point()}</div>
      <div className={cx("Login-mid-input-number")}>{number()}</div>
    </div>
  );
};

export default Input;
