import Button from "@ui/Button";

import styles from "./main.module.scss";

const Main = () => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.coverImage}>
          <img
            src="https://marketplace.canva.com/EAFB2eB7C3o/1/0/1600w/canva-yellow-and-turquoise-vintage-rainbow-desktop-wallpaper-Y4mYj0d-9S8.jpg"
            alt="coverImage"
          />
        </div>
        <div className={styles.header}>
          <div className={styles.user}>
            <img
              src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
              alt="profilePic"
            />
            <div className={styles.userInfo}>
              <div className={styles.name}>Алёна Тарасова</div>
              <div className={styles.username}>alyoneek</div>
            </div>
          </div>
          <Button color="green">Добавить</Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
