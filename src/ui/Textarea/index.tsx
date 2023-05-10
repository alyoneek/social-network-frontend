import { FC } from "react";

import styles from "./textarea.module.scss";

interface IextareaProps {
  placeholder?: string;
}

const Textarea: FC<IextareaProps> = ({ placeholder = "" }) => {
  return <textarea placeholder={placeholder} className={styles.textarea} />;
};

export default Textarea;
