import Image from "next/image";
import styles from "./Gif.module.sass";

const Gif = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gif}>
        <Image src="/0/0.gif" fill alt="" />;
      </div>
    </div>
  );
};

export default Gif;
