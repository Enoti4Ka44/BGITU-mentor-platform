import { useEffect, useState } from "react";
import { mentorAPI } from "../../../services/api/mentorAPI";
import { articlesAPI } from "../../../services/api/articlesAPI";
import styles from "./StudentHome.module.scss";
import Sidebar from "../../../components/layout/sidebar/Sidebar";
import MentorCard from "../components/mentorCard/MentorCard";
import MyMentorCard from "../components/myMentorCard/MyMentorCard";
import MentorModal from "../components/MentorModal/MentorModal";
import { toast } from "react-toastify";

function StudentHome(props) {
  const [popularMentors, setPopularMentors] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchMentors = async () => {
    try {
      const data = await mentorAPI.getPopularMentors();
      setPopularMentors(data);
    } catch (error) {
      console.error("Ошибка загрузки менторов", error);
      toast.error("Не удалось загрузить менторов");
    }
  };

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
    const fetchData = async () => {
      await Promise.all([fetchMentors(), fetchArticles()]);
    };
    fetchData();
  }, []);

  const handleCardClick = async (mentorId) => {
    try {
      const fullMentorData = await mentorAPI.getMentorById(mentorId);
      setSelectedMentor(fullMentorData);
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
        <h2>Главная</h2>
        <div className={styles.featureMentors}>
          <h3 className={styles.sectionTitle}>Рекомендуемые менторы</h3>
          <div className={styles.mentorsCards}>
            {popularMentors ? (
              popularMentors.map((card) => (
                <MentorCard
                  id={card.id}
                  firstName={card.firstName}
                  lastName={card.lastName}
                  speciality={card.speciality}
                  rank={card.rank}
                  key={card.id}
                  onClick={handleCardClick}
                />
              ))
            ) : (
              <p style={{ fontWeight: "700", fontSize: "32px" }}>
                Рекомендуемые менторы не найдены
              </p>
            )}
          </div>
        </div>

        <div className={styles.myMentor}>
          <h3 className={styles.sectionTitle}>Мой ментор</h3>
          <MyMentorCard
            firstName="Евангелион"
            lastName="Александр"
            speciality="Python Backen Developer"
            description="Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris "
            vk="#"
            telegram="#"
          />
        </div>

        <div className={styles.popularArticles}>
          <h3 className={styles.sectionTitle}>Популярные статьи</h3>
        </div>
      </div>
    </div>
  );
}

export default StudentHome;
