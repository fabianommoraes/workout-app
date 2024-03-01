import styles from "./Attributes.module.sass";

type AttributesProps = {
  description: string;
  weight: string;
};

const Attributes = ({ description, weight }: AttributesProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>{description}</div>
      <div className={styles.item}>{weight}</div>
    </div>
  );
};

export default Attributes;
