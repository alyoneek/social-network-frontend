import Button from "@ui/Button";
import Input from "@ui/Input";

import styles from "./signinForm.module.scss";

const SigninForm = () => {
  return (
    <form className={styles.form}>
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Пароль" />
      <Button color="blue">Войти</Button>
    </form>
  );
};

export default SigninForm;
