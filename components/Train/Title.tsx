import styles from "./Title.module.sass";
import { TitleProps } from "./Title.types";

const Title = ({ children }: TitleProps) => {
  return <div className={styles.title}>{children}</div>;
};

export default Title;
