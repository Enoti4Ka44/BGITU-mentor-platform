// src/pages/studentHome/components/PopularArticles.jsx
import styles from "./PopularArticles.module.scss";
import ArticleCard from "../articleCard/ArticleCard";
import { articlesAPI } from "../../../services";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function PopularArticles({ onArticleClick }) {
  const [popularArticles, setPopularArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const data = await articlesAPI.getPopularArticles();
      setPopularArticles(data);
    } catch (error) {
      console.error("Ошибка загрузки статей", error);
      toast.error("Не удалось загрузить статьи");
    }
  };

  useEffect(() => {
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
          <p style={{ fontWeight: "500", fontSize: "28px" }}>
            Рекомендуемые статьи не найдены
          </p>
        )}
      </div>
    </div>
  );
}

export default PopularArticles;
