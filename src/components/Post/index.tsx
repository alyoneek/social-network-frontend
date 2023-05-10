import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";

import Like from "@components/Like";

import styles from "./post.module.scss";

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.userInfo}>
            <img
              src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
              alt="profilePic"
            />
            <div className={styles.details}>
              <Link
                to={`/username`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className={styles.name}>Aaa</span>
              </Link>
              <span className={styles.date}>1 min ago</span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <ShowMoreText
            lines={3}
            more="Раскрыть"
            less="Скрыть"
            className={styles.description}
            anchorClass={styles.showMoreLess}
            expanded={false}
          >
            <p className={styles.description}>
              ut labore et dolore magna amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation
            </p>
          </ShowMoreText>

          <img
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            alt="postImage"
          />
        </div>

        <Like />
      </div>
    </div>
  );
};

export default Post;
