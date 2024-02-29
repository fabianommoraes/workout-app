import styles from "./Attributes.module.sass";
import { AttributesProps } from "./Attributes.types";

const Attributes = () => {
  return (
    <div className={styles.container}>
      <div>2x 20segundos</div>
      <div>10kg</div>
    </div>
  );
};

export default Attributes;
