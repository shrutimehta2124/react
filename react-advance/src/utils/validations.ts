export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;

export const isAdult = (dob: string) => {
  const birthDate = new Date(dob);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  return age >= 18;
};
