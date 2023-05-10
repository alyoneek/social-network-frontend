import { FC } from "react";

import styles from "./input.module.scss";

interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  min?: number;
  placeholder?: string;
  className?: string;
}

const Input: FC<InputProps> = ({
  type = "text",
  min,
  placeholder = "",
  className = "",
}) => {
  return (
    <input
      type={type}
      min={min}
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
    />
  );
};

export default Input;
