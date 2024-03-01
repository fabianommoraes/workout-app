import Attributes from "@/components/Attributes/Attributes";
import Gif from "@/components/Gif/Gif";
import Stopwatch from "@/components/Stopwatch/Stopwatch";
import Exercise from "@/components/Exercise/Exercise";
import Head from "next/head";
import { useState } from "react";
import train from "@/public/treino.json";
import Touch from "@/components/Touch/Touch";
import Train from "@/components/Train/Train";

export default function Home() {
  const [currentTrain, setCurrentTrain] = useState(0);
  const [currentExercise, setCurrentExercise] = useState(0);

  const previousExercise = () => {
    if (currentExercise !== 0) {
      const newExercise = currentExercise - 1;
      setCurrentExercise(newExercise);
    }
  };

  const nextExercise = () => {
    if (currentExercise !== train.train[currentTrain].length - 1) {
      const newExercise = currentExercise + 1;
      setCurrentExercise(newExercise);
    }
  };

  // const previousTrain = () => {
  //   if (currentTrain !== train.train.length) {
  //     const newTrain = currentTrain - 1;
  //     setCurrentTrain(newTrain);
  //   }
  // };

  const nextTrain = () => {
    if (currentTrain === train.train.length - 1) {
      const newTrain = 0;
      setCurrentTrain(newTrain);
    } else {
      const newTrain = currentTrain + 1;
      setCurrentTrain(newTrain);
    }
  };

  return (
    <>
      <Head>
        <title>Workout App</title>
      </Head>
      <Train number={currentTrain} onClick={nextTrain} />
      <Exercise name={train.train[currentTrain][currentExercise].name} />
      <Gif src={`/${currentTrain}/${currentExercise}.gif`} />
      <Attributes
        description={train.train[currentTrain][currentExercise].description}
        weight={train.train[currentTrain][currentExercise].weight}
      />
      <Stopwatch />

      <Touch left onClick={previousExercise} />
      <Touch right onClick={nextExercise} />
    </>
  );
}
