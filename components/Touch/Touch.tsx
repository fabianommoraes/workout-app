import styles from "./Touch.module.sass";

type TouchProps = {
  left?: boolean;
  right?: boolean;
  onClick: () => void;
};

const Touch = ({ left, right, onClick }: TouchProps) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.touch} ${right && styles.right} ${left && styles.left}`}
    />
  );
};

export default Touch;
