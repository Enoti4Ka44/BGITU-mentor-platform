import { articlesAPI } from "../../services";
import styles from "./AllArticles.module.scss";
import { toast } from "react-toastify";
import Layout from "../../components/layout/Layout";
import ArticleCard from "../../components/layout/articleCard/ArticleCard";
import ArticleModal from "./components/articleModal/ArticleModal";
import SearchBar from "../../components/ui/searchBar/SearchBar";
import { useEffect, useState } from "react";

function AllArticles() {
  const [allArticles, setAllArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await articlesAPI.getAllArticles();
        setAllArticles(data);
      } catch (error) {
        console.log("Ошибка", error);
      }
    };
    fetchData();
  }, []);

  const handleCardClick = async (articleId) => {
    try {
      const fullMentorData = await articlesAPI.getArticleById(articleId);
      setSelectedArticle(fullMentorData);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Ошибка загрузки данных", error);
      toast.error("Ошибка загрузки данных");
    }
  };

  const handleSearch = async (query) => {
    try {
      const results = await articlesAPI.searchArticles(query);
      setAllArticles(results);
    } catch (error) {
      toast.error("Ошибка при поиске статей");
    }
  };

  return (
    <Layout>
      {isModalOpen && selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <h2>Все статьи</h2>
      <div className={styles.articlesCard}>
        <SearchBar placeholder="Поиск статей..." onSearch={handleSearch} />
        {allArticles.map((card) => (
          <ArticleCard key={card.id} {...card} onClick={handleCardClick} />
        ))}
      </div>
    </Layout>
  );
}

export default AllArticles;
