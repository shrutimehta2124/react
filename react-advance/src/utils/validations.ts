export const emailPattern = /\S+@\S+\.\S+/;
export const passwordPattern =
  /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

export const isAdult = (dob: string) => {
  const birthDate = new Date(dob);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  return age >= 18;
};
