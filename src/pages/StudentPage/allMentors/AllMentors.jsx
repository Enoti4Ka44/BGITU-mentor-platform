import { mentorAPI } from "../../../services";
import styles from "./AllMentors.module.scss";
import { toast } from "react-toastify";
import MentorCard from "../components/mentorCard/MentorCard";
import MentorModal from "../components/MentorModal/MentorModal";
import Sidebar from "../../../components/layout/sidebar/Sidebar";
import { useEffect, useState } from "react";

function AllMentors() {
  const [allMentors, setAllMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await mentorAPI.getAllMentors();
        setAllMentors(data);
      } catch (error) {
        console.log("Ошибка", error);
      }
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
        <h2>Все менторы</h2>

        <div className={styles.mentorsCards}>
          {allMentors.map((card) => (
            <MentorCard
              id={card.id}
              firstName={card.firstName}
              lastName={card.lastName}
              speciality={card.speciality}
              rank={card.rank}
              key={card.id}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllMentors;
