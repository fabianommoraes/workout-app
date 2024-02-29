import { Metadata } from "next";
import { LayoutProps } from "./Layout.types";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "PWA with Next 13",
  description: "PWA application with Next 13",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Fabiano" },
    {
      name: "Moraes"
    }
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" }
  ]
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className={roboto.className}>{children}</main>
    </>
  );
};

export default Layout;
