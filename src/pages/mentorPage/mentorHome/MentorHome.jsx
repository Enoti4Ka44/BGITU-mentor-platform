import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MentorHome.module.scss";
import Layout from "../../../components/layout/Layout";
import PopularArticles from "../../../components/layout/popularArticles/PopularArticles";
import StudentCard from "../components/studentCard/StudentCard";
import { mentorAPI } from "../../../services";

function MentorHome() {
  const [studentsData, setStudentsData] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);

  const handleArticleCardClick = async (articleId) => {
    try {
      const fullArticleData = await articlesAPI.getArticleById(articleId);
      setSelectedArticle(fullArticleData);
      setIsArticleModalOpen(true);
    } catch (error) {
      console.error("Ошибка загрузки данных", error);
      toast.error("Ошибка загрузки данных");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await mentorAPI.getMentorStudents();
        setStudentsData(data);
      } catch (error) {
        console.log("Ошибка при загрузке данных", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <h2>Главная</h2>
      <div className={styles.myStudents}>
        <h3>Мои студенты</h3>
        <div className={styles.myStudentsCards}>
          {studentsData.length > 0 ? (
            studentsData
              .slice(0, 3)
              .map((student) => (
                <StudentCard key={student.id} student={student} />
              ))
          ) : (
            <p style={{ fontWeight: "500", fontSize: "28px" }}>
              Студенты не найдены
            </p>
          )}
        </div>
        {studentsData.length > 0 && (
          <Link to="/mentor-students" className={styles.showAllLink}>
            Показать всех студентов →
          </Link>
        )}
      </div>
      <div className={styles.popularArticles}>
        <h3 className={styles.sectionTitle}>Популярные статьи</h3>
        <PopularArticles onArticleClick={handleArticleCardClick} />
      </div>
    </Layout>
  );
}

export default MentorHome;
