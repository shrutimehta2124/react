import { useNavigate } from "react-router-dom";

interface ArticleCardProps {
  id: number;
  title: string;
}

const ArticleCard = ({ id, title }: ArticleCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="border p-4 mb-2 cursor-pointer hover:bg-gray-200"
      onClick={() => navigate(`/article/${id}`)}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
};

export default ArticleCard;
