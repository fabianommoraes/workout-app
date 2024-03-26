import Select from "@/components/Select/Select";
import { useState, useEffect } from "react";

const train = [[], [], []];

export default function MontarTreino() {
  const [selectedTrain, setSelectedTrain] = useState(0);

  const [selectedName, setSelectedName] = useState("null");
  const [selectedId, setSelectedId] = useState("null");
  const [selectedLoad, setSelectedLoad] = useState("null");
  const [selectedSeries, setSelectedSeries] = useState("null");
  const [selectedRepetitions, setSelectedRepetitions] = useState("null");
  const [showTrain, setShowTrain] = useState(false);

  const [exercises, setExercises] = useState([]);

  const fetchExercises = async () => {
    const response = await fetch("/api/exercises");
    const data = await response.json();
    setExercises(data);
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  const nextExercise = () => {
    train[selectedTrain].push({
      name: selectedName,
      id: selectedId,
      load: selectedLoad,
      series: selectedSeries,
      repetitions: selectedRepetitions
    });

    setSelectedId("null");
    setSelectedLoad("null");
    setSelectedSeries("null");
    setSelectedRepetitions("null");

    console.log(train);
  };

  const finishTrain = () => {
    nextExercise();
    setShowTrain(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: "white"
      }}
    >
      {!showTrain && (
        <>
          {/* <Head>
        <title>Workout App</title>
      </Head> */}
          {/* <label>
        Selecione o treino:
        <select
          value={selectedTrain} 
          onChange={(e) => setSelectedTrain(e.target.value)}
        >
          <option value={0}>A</option>
          <option value={1}>B</option>
          <option value={2}>C</option>
        </select>
      </label> */}

          <label>
            Selecione o exercício:
            <select
              value={selectedId}
              onChange={(e) => {
                setSelectedName(e.target.selectedOptions[0].text);
                setSelectedId(e.target.value);
              }}
            >
              <option value="null">-</option>
              {exercises.map((exercise) => (
                <option
                  key={exercise._id}
                  value={exercise._id}
                  name={exercise.name}
                >
                  {exercise.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Carga:
            <select
              value={selectedLoad}
              onChange={(e) => setSelectedLoad(e.target.value)}
            >
              <option value="null">-</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
            Kg
          </label>

          <label>
            Séries:
            <select
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
            >
              <option value="null">-</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>

          <label>
            Repetições:
            <select
              value={selectedRepetitions}
              onChange={(e) => setSelectedRepetitions(e.target.value)}
            >
              <option value="null">-</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </label>

          <button onClick={nextExercise}>Adicionar e Próximo exercício</button>
          <button onClick={finishTrain}>Adicionar e Finalizar treino</button>
        </>
      )}

      {showTrain && (
        <div>
          {train[0].map((exercise) => (
            <div key={exercise.id}>
              {exercise.name} | Carga: {exercise.load} | Séries:{" "}
              {exercise.series} | Repetições: {exercise.repetitions}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
