import { FC, ReactNode } from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  type?: "submit" | "button" | "reset";
  color?: "gray" | "blue" | "white";
  children?: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  type = "button",
  color = "gray",
  children,
  className,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
