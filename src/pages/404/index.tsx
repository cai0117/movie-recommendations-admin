import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.less";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bold}>404</div>
      <div className={styles.bold}>页面找不到</div>
      <Link to="/" replace>
        回到首页
      </Link>
    </div>
  );
};

export default NotFoundPage;
