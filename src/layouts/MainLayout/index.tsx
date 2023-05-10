import { FC } from "react";
import { Outlet } from "react-router-dom";

import Header from "@components/Header";
import Navbar from "@components/Navbar";

import styles from "./mainLayout.module.scss";

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Navbar />
        </div>
        <div className={styles.main}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
