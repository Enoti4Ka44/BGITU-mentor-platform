import NotFoundText from "../../ui/notFoundText/NotFoundText";
import styles from "./PopularArticles.module.scss";
import ArticleCard from "../articleCard/ArticleCard";
import { articlesAPI } from "../../../services";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function PopularArticles({ onArticleClick }) {
  const [popularArticles, setPopularArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await articlesAPI.getPopularArticles();
        setPopularArticles(data);
      } catch (error) {
        console.error("Ошибка загрузки статей", error);
        toast.error("Не удалось загрузить статьи");
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className={styles.popularArticles}>
      <div className={styles.articleCards}>
        {popularArticles.length > 0 ? (
          popularArticles.map((card) => (
            <ArticleCard {...card} key={card.id} onClick={onArticleClick} />
          ))
        ) : (
          <NotFoundText>Рекомендуемые статьи не найдены</NotFoundText>
        )}
      </div>
    </div>
  );
}

export default PopularArticles;
