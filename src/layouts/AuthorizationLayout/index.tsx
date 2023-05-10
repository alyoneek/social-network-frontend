import { FC } from "react";
import { Outlet } from "react-router-dom";

import styles from "./authorizationLayout.module.scss";

const AuthorizationLayout: FC = () => {
  return (
    <div className={styles.root}>
      <Outlet />
    </div>
  );
};

export default AuthorizationLayout;
