import { FC } from "react";
import { Link } from "react-router-dom";

import { FiLogOut } from "react-icons/fi";
import { TiSocialVimeoCircular } from "react-icons/ti";

import NoAvatar from "@/assets/images/no-avatar.png";
import styles from "./header.module.scss";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link to="/" className={styles.logo}>
            <TiSocialVimeoCircular className={styles.icon} />
            <span className={styles.name}>Social</span>
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.user}>
            <img src={NoAvatar} alt="avatar" className={styles.avatar} />
            <span>User</span>
          </div>
          <Link to="/signin">
            <FiLogOut className={styles.logout} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
