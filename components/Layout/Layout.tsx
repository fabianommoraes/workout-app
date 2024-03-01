import { LayoutProps } from "./Layout.types";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"]
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className={roboto.className}>{children}</main>
    </>
  );
};

export default Layout;
