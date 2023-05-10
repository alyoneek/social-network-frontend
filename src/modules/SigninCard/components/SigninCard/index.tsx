import { Link } from "react-router-dom";

import Button from "@ui/Button";
import SigninForm from "../SigninForm";

import styles from "./signinCard.module.scss";

const SigninCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <h1>Добро пожаловать!</h1>
        <div>
          <span>Нет аккаунта?</span>
          <Link to="/signup">
            <Button color="gray">Зарегистрироваться</Button>
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <h1>Войти</h1>
        <SigninForm />
      </div>
    </div>
  );
};

export default SigninCard;
