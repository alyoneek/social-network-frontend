import { Link } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { HiNewspaper } from "react-icons/hi";

import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/username" className={styles.item}>
        <AiFillHome className={styles.icon} />
        <span>Моя страница</span>
      </Link>
      <Link to="/" className={styles.item}>
        <HiNewspaper className={styles.icon} />
        <span>Новости</span>
      </Link>
      {/* <Link to="massages" className={styles.item}>
            <span>Сообщения</span>
          </Link> */}
      <Link to="friends" className={styles.item}>
        <FaUserFriends className={styles.icon} />
        <span>Друзья</span>
      </Link>
      {/* <Link to="users" className={styles.item}>
            <span>Пользователи</span>
          </Link> */}
    </div>
  );
};

export default Navbar;
