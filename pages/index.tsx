import Attributes from "@/components/Attributes/Attributes";
import Gif from "@/components/Gif/Gif";
import Stopwatch from "@/components/Stopwatch/Stopwatch";
import Title from "@/components/Title/Title";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Workout App</title>
      </Head>
      <Title>Sequência fortalecimento de tornozelo</Title>
      <Gif />
      <Attributes />
      <Stopwatch />
    </>
  );
}
