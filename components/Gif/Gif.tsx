import Image from "next/image";
import styles from "./Gif.module.sass";

type GifProps = {
  src: string;
};

const Gif = ({ src }: GifProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.gif}>
        <Image priority src={src} fill alt="" />;
      </div>
    </div>
  );
};

export default Gif;
