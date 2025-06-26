import { toast } from "react-toastify";
import styles from "./MentorArticles.module.scss";
import Layout from "../../../components/layout/Layout";
import ArticleCard from "../../../components/layout/articleCard/ArticleCard";
import ArticleModal from "../../articles/components/articleModal/ArticleModal";
import { useEffect, useState } from "react";
import { mentorAPI, articlesAPI } from "../../../services";

function MentorArticles() {
  const [mentorArticles, setMentorArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await mentorAPI.getMentorArticles();
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
          <ArticleCard
            id={card.id}
            imageUrl={card.imageUrl}
            title={card.title}
            content={card.content}
            speciality={card.specialityName}
            rank={card.rank}
            key={card.id}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MentorArticles;
