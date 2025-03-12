import { useParams } from "react-router-dom";
import { articles } from "../data/articles";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) return <h1 className="text-center mt-4">Article Not Found</h1>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-lg">{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
