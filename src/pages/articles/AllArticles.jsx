import { articlesAPI } from "../../services";
import styles from "./AllArticles.module.scss";
import { toast } from "react-toastify";
import ArticleCard from "../../components/layout/articleCard/ArticleCard";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import { useEffect, useState } from "react";

function AllArticles() {
  const [allArticles, setAllArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await articlesAPI.getAllArticles;
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

  return (
    <div className="container">
      {isModalOpen && selectedMentor && (
        <MentorModal
          mentor={selectedMentor}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <Sidebar />
      <div className={styles.home}>
        <h2>Все статьи</h2>

        <div className={styles.articlesCard}>
          {/* {allArticles.map((card) => (
            <ArticleCard
              //   id={card.id}
              title={card.data.title}
              content={card.data.content}
              //   key={card.id}
              onClick={handleCardClick}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default AllArticles;
