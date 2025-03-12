import { useNavigate } from "react-router-dom";

export function useNavigation() {
  const navigate = useNavigate();

  return {
    goHome: () => navigate("/"),
    goToPosts: () => navigate("/posts"),
  };
}
