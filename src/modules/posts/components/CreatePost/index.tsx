import { HiOutlinePhotograph } from "react-icons/hi";
import { IoCreateOutline } from "react-icons/io5";

import Button from "@ui/Button";

import styles from "./createPost.module.scss";

const CreatePost = () => {
  return (
    <div className={styles.createPost}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.info}>
            <IoCreateOutline className={styles.icon} />
            <span>Создать пост</span>
          </div>
        </div>

        <div className={styles.content}>
          <textarea placeholder="Что у вас нового?" />
        </div>
        <div className={styles.info}>
          <div className={styles.photo}>
            <HiOutlinePhotograph className={styles.icon} />
            <span>Фото</span>
          </div>
          <Button color="green">Создать</Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
