import { useState, useRef } from "react";
import styles from "./AddExerciseForm.module.sass";
import ImagePicker from "../ImagePicker/ImagePicker";
import { addExercise } from "../../services/exercises";

// type AAddExerciseFormProps = {
//   description: string;
//   weight: string;
// };

const AddExerciseForm = () => {
  const [name, setName] = useState("");
  const [pickedImage, setPickedImage] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", pickedImage);
    formData.append("name", name);

    // console.log(formData);

    await addExercise(formData);
    setName("");
    setPickedImage();
  };

  return (
    <form className={styles.form}>
      <label>
        Nome do exercício:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <ImagePicker
        label="Your image"
        name="image"
        pickedImage={pickedImage}
        setPickedImage={setPickedImage}
      />

      <button onClick={handleSubmit}>Adicionar exercicio</button>
      {/* <progress value={uploadProgress} max="100"></progress> */}

      {/* {sucess && <div>Exercicio adicionado!</div>} */}
    </form>
  );
};

export default AddExerciseForm;
