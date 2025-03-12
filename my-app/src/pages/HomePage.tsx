import { useNavigate } from "react-router-dom";
import { articles } from "../data/articles";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      {articles.map((article) => (
        <div
          key={article.id}
          className="border p-4 mb-2 cursor-pointer"
          onClick={() => user ? navigate(`/article/${article.id}`) : alert("Login Required")}
        >
          <h2 className="text-xl font-semibold">{article.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
