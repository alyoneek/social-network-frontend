import { FC } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import styles from "./like.module.scss";

const liked = true;

const Like: FC = () => {
  return (
    <div className={styles.likes}>
      {liked ? (
        <AiFillHeart className={`${styles.icon} ${styles.active}`} />
      ) : (
        <AiOutlineHeart className={`${styles.icon}`} />
      )}
      <span className={styles.likesCount}>12 Likes</span>
    </div>
  );
};

export default Like;
