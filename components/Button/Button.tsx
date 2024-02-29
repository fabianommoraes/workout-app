import styles from "./Button.module.sass";
import { ButtonProps } from "./Button.types";

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
