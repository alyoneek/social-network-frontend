import { Link } from "react-router-dom";

import Button from "@ui/Button";
import SignupForm from "../SignupForm";

import styles from "./signupCard.module.scss";

const SignupCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <h1>Регистрация</h1>
        <SignupForm />
      </div>
      <div className={styles.right}>
        <h1>Добро пожаловать!</h1>
        <div>
          <span>Уже есть аккаунт аккаунт?</span>
          <Link to="/signin">
            <Button color="gray">Войти</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
