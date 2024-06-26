import { Roboto } from "next/font/google";
import styles from "./Layout.module.sass";
import { KeepAwake } from "react-keep-awake";

type LayoutProps = {
  children: React.ReactNode;
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"]
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <KeepAwake />
      <main className={`${roboto.className} ${styles.layout}`}>{children}</main>
    </>
  );
};

export default Layout;
