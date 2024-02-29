import styles from "./Attributes.module.sass";
import { AttributesProps } from "./Attributes.types";

const Attributes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>2x 20segundos</div>
      <div className={styles.item}>10kg</div>
    </div>
  );
};

export default Attributes;
