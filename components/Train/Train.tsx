import styles from "./Train.module.sass";

type TrainProps = {
  number: number;
  onClick: () => void;
};

const fromTo = ["A", "B", "C"];

const Train = ({ number, onClick }: TrainProps) => {
  return (
    <div onClick={onClick} className={styles.train}>
      Treino <span>{fromTo[number]}</span>
    </div>
  );
};

export default Train;
