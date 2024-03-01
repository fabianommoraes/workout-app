import Attributes from "@/components/Attributes/Attributes";
import Gif from "@/components/Gif/Gif";
import Stopwatch from "@/components/Stopwatch/Stopwatch";
import Exercise from "@/components/Exercise/Exercise";
import Head from "next/head";
import { useState } from "react";
import train from "@/public/treino.json";
import Touch from "@/components/Touch/Touch";

export default function Home() {
  const [currentTrain, setCurrentTrain] = useState(0);
  const [currentExercise, setCurrentExercise] = useState(0);

  const nextExercise = () => {
    if (currentExercise !== train.train.length) {
      const newExercise = currentExercise + 1;
      setCurrentExercise(newExercise);
    }
  };

  const previusExercise = () => {
    if (currentExercise !== 0) {
      const newExercise = currentExercise - 1;
      setCurrentExercise(newExercise);
    }
  };

  return (
    <>
      <Head>
        <title>Workout App</title>
      </Head>
      <Exercise name={train.train[currentTrain][currentExercise].name} />
      <Gif src={`/${currentTrain}/${currentExercise}.gif`} />
      <Attributes
        description={train.train[currentTrain][currentExercise].description}
        weight={train.train[currentTrain][currentExercise].weight}
      />
      <Stopwatch />

      <Touch left onClick={previusExercise} />
      <Touch right onClick={nextExercise} />
    </>
  );
}
