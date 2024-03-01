import styles from "./Exercise.module.sass";

type ExerciseProps = {
  name: string;
};

const Exercise = ({ name }: ExerciseProps) => {
  return <div className={styles.title}>{name}</div>;
};

export default Exercise;
