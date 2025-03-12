import { useState } from "react";

const useFormValidation = () => {
  const [error, setError] = useState<string>("");

  const validate = (input: string) => {
    if (input.trim() === "") {
      setError("Task title cannot be empty");
      return false;
    }
    setError("");
    return true;
  };

  return { error, validate };
};

export default useFormValidation;
