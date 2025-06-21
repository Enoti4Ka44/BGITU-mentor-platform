import { useState } from "react";
import styles from "./StudentHome.module.scss";
import Sidebar from "../../../components/layout/sidebar/Sidebar";
import MentorCard from "../../../components/ui/mentorCard/MentorCard";
import MyMentorCard from "../../../components/ui/myMentorCard/MyMentorCard";

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
          <MyMentorCard />
        </div>

        <div className={styles.popularArticles}>
          <h3 className={styles.sectionTitle}>Популярные статьи</h3>
        </div>
      </div>
    </div>
  );
}

export default StudentHome;
