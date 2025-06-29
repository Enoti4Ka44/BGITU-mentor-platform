import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ArticleModal from "../../articles/components/articleModal/ArticleModal";
import styles from "./MentorHome.module.scss";
import Layout from "../../../components/layout/Layout";
import PopularArticles from "../../../components/layout/popularArticles/PopularArticles";
import StudentCard from "../components/studentCard/StudentCard";
import { mentorAPI, mentorshipAPI, articlesAPI } from "../../../services";

function MentorHome() {
  const [studentsData, setStudentsData] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleReject = async (studentId) => {
    try {
      const response = await mentorshipAPI.postMentorReject(studentId);
      toast.success("Вы отказались от студента");
      setStudentsData((prevStudents) =>
        prevStudents.filter((student) => student.id !== studentId)
      );
    } catch (error) {
      console.error(error);
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

      <h2>Главная</h2>
      <div className={styles.myStudents}>
        <h3>Мои студенты</h3>
        <div className={styles.myStudentsCards}>
          {studentsData.length > 0 ? (
            studentsData
              .slice(0, 3)
              .map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onClick={handleReject}
                />
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
        <PopularArticles onArticleClick={handleCardClick} />
      </div>
    </Layout>
  );
}

export default MentorHome;
