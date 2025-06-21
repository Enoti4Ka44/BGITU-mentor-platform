import { useState } from "react";
import styles from "./StudentHome.module.scss";
import Sidebar from "../../../components/layout/sidebar/Sidebar";
import MentorCard from "../components/mentorCard/MentorCard";
import MyMentorCard from "../components/myMentorCard/MyMentorCard";

function StudentHome(props) {
  const [active, setActive] = useState(false);
  return (
    <div className="container">
      <Sidebar />
      <div className={styles.home}>
        <h2>Главная</h2>
        <div className={styles.featureMentors}>
          <h3 className={styles.sectionTitle}>Рекомендуемые менторы</h3>
          <div className={styles.mentorsCards}>
            <MentorCard
              firstName="Дмитрий"
              lastName="Волков"
              speciality="Python Backen Developer"
              rank={244}
            />
            <MentorCard
              firstName="Дмитрий"
              lastName="Волков"
              speciality="Python Backen Developer"
              rank={244}
            />
            <MentorCard
              firstName="Дмитрий"
              lastName="Волков"
              speciality="Python Backen Developer"
              rank={244}
            />
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
