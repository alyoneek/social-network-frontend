import Button from "@ui/Button";
import Input from "@ui/Input";

import styles from "./signupForm.module.scss";

const SignupForm = () => {
  return (
    <form className={styles.form}>
      <Input type="text" placeholder="Email" />
      <Input type="text" placeholder="Никнейм" />
      <Input type="password" placeholder="Пароль" />
      <Input type="password" placeholder="Подтверждение пароля" />
      <Input type="text" placeholder="Имя" />
      <Input type="text" placeholder="Фамилия" />
      <Input type="number" min={1} placeholder="Возраст" />
      <Input type="text" placeholder="Город" />
      <Input type="Вуз" placeholder="Вуз" className={styles.fullWidth} />
      <Button color="blue">Зарегистрироваться</Button>
    </form>
  );
};

export default SignupForm;
