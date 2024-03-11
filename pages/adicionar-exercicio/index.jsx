import { useState } from "react";

export default function AdicionarExercicio() {
  const [firstName, setFirstName] = useState("");

  const [file, setFile] = useState();
  const [uploadProgress, setUploadProgress] = useState(0);

  const [sucess, setSuccess] = useState(false);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:3000/uploadFile";
    const formData = new FormData();
    formData.append("file", file);

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      },
      onUploadProgress: function (progressEvent) {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setUploadProgress(percentCompleted);
      }
    };

    setSuccess(true);

    // axios
    //   .post(url, formData, config)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error uploading file: ", error);
    //   });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: "white"
      }}
    >
      <label>
        Nome do exercício:
        <input
          value={firstName} // ...force the input's value to match the state variable...
          onChange={(e) => setFirstName(e.target.value)} // ... and update the state variable on any edits!
        />
      </label>

      <input type="file" onChange={handleChange} />
      <button onClick={handleSubmit}>Adicionar exercicio</button>
      {/* <progress value={uploadProgress} max="100"></progress> */}

      {sucess && <div>Exercicio adicionado!</div>}
    </div>
  );
}
