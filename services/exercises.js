export const addExercise = async (formData) => {
  const response = await fetch("/api/exercises", {
    method: "POST",
    body: formData
  });
};
