import { useEffect, useState } from "react";
import { mentorAPI, articlesAPI, studentAPI } from "../../../services";

import styles from "./StudentHome.module.scss";
import Layout from "../../../components/layout/Layout";
import MentorCard from "../components/mentorCard/MentorCard";
import MyMentorCard from "../components/myMentorCard/MyMentorCard";
import MentorModal from "../components/MentorModal/MentorModal";
import PopularArticles from "../../../components/layout/popularArticles/PopularArticles";
import ArticleModal from "../../articles/components/articleModal/ArticleModal";
import NotFoundText from "../../../components/ui/notFoundText/NotFoundText";
import { toast } from "react-toastify";

function StudentHome() {
  const [popularMentors, setPopularMentors] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]);
  const [studentMentor, setStudentMentor] = useState(null);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isMentorModalOpen, setIsMentorModalOpen] = useState(false);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);

  const fetchMentors = async () => {
    try {
      const data = await mentorAPI.getPopularMentors();
      setPopularMentors(data);
    } catch (error) {
      console.error("Ошибка загрузки менторов", error);
    }
  };

  const fetchArticles = async () => {
    try {
      const data = await articlesAPI.getPopularArticles();
      setPopularArticles(data);
    } catch (error) {
      console.error("Ошибка загрузки статей", error);
    }
  };

  const fetchStudentMentor = async () => {
    try {
      const data = await studentAPI.getStudentMentor();
      setStudentMentor(data);
    } catch (error) {
      console.error("Не удалось загрузить информацию о вашем менторе", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        fetchMentors(),
        fetchStudentMentor(),
        fetchArticles(),
      ]);
    };
    fetchData();
  }, []);

  const handleMentorCardClick = async (mentorId) => {
    try {
      const fullMentorData = await mentorAPI.getMentorById(mentorId);
      setSelectedMentor(fullMentorData);
      setIsMentorModalOpen(true);
    } catch (error) {
      console.error("Ошибка загрузки данных", error);
      toast.error("Ошибка загрузки данных");
    }
  };

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

  return (
    <Layout>
      <>
        <h2>Главная</h2>
        <div className={styles.featureMentors}>
          <h3 className={styles.sectionTitle}>Рекомендуемые менторы</h3>
          <div className={styles.mentorsCards}>
            {popularMentors.length > 0 ? (
              popularMentors.map((card) => (
                <MentorCard
                  id={card.id}
                  avatarUrl={card.avatarUrl}
                  firstName={card.firstName}
                  lastName={card.lastName}
                  speciality={card.speciality}
                  rank={card.rank}
                  key={card.id}
                  onClick={handleMentorCardClick}
                />
              ))
            ) : (
              <NotFoundText>Рекомендуемые менторы не найдены</NotFoundText>
            )}
          </div>
        </div>

        <div className={styles.myMentor}>
          <h3 className={styles.sectionTitle}>Мой ментор</h3>
          {studentMentor ? (
            <MyMentorCard studentMentor={studentMentor} />
          ) : (
            <NotFoundText>У вас еще нет ментора</NotFoundText>
          )}
        </div>

        <div className={styles.popularArticles}>
          <h3 className={styles.sectionTitle}>Популярные статьи</h3>
          {popularArticles.length > 0 ? (
            <PopularArticles onArticleClick={handleArticleCardClick} />
          ) : (
            <NotFoundText>Рекомендуемые статьи не найдены</NotFoundText>
          )}
        </div>
      </>

      {isMentorModalOpen && selectedMentor && (
        <MentorModal
          mentor={selectedMentor}
          onClose={() => setIsMentorModalOpen(false)}
        />
      )}

      {isArticleModalOpen && selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setIsArticleModalOpen(false)}
        />
      )}
    </Layout>
  );
}

export default StudentHome;
