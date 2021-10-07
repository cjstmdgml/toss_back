import React from "react";
import classNames from "classnames";
import style from "./PageTemplate.scss";

const cx = classNames.bind(style);

const PageTemplate = ({ children }) => {
  return <div className={cx("PageTemplate")}>{children}</div>;
};

export default PageTemplate;
