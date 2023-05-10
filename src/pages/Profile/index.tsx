import { CreatePost, PostsInfiniteList } from "@modules/posts";
import { About, Main } from "@modules/profile";

import styles from "./profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Main />
      </div>
      <div className={styles.about}>
        <About />
      </div>
      <div className={styles.createPost}>
        <CreatePost />
      </div>
      <div className={styles.posts}>
        <PostsInfiniteList />
      </div>
    </div>
  );
};

export default Profile;
