import { toast } from "react-toastify";
import styles from "./MentorArticles.module.scss";
import Layout from "../../../components/layout/Layout";
import ArticleCard from "../../../components/layout/articleCard/ArticleCard";
import ArticleModal from "../../articles/components/articleModal/ArticleModal";
import { useEffect, useState } from "react";
import { mentorProfileAPI, articlesAPI } from "../../../services";

function MentorArticles() {
  const [mentorArticles, setMentorArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await mentorProfileAPI.getMentorArticles();
        setMentorArticles(data);
      } catch (error) {
        console.log("Ошибка", error);
      }
    };
    fetchData();
  }, []);

  const handleCardClick = async (articleId) => {
    try {
      const fullArticleData = await articlesAPI.getArticleById(articleId);
      setSelectedArticle(fullArticleData);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Ошибка загрузки данных", error);
      toast.error("Ошибка загрузки данных");
    }
  };

  return (
    <Layout>
      {isModalOpen && selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setIsModalOpen(false)}
          button={true}
        />
      )}

      <h2>Мои статьи</h2>
      <div className={styles.articlesCard}>
        {mentorArticles.map((card) => (
          <ArticleCard key={card.id} {...card} onClick={handleCardClick} />
        ))}
      </div>
    </Layout>
  );
}

export default MentorArticles;
