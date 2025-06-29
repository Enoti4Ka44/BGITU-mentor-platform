import { mentorAPI } from "../../../services";
import styles from "./AllMentors.module.scss";
import { toast } from "react-toastify";
import Layout from "../../../components/layout/Layout";
import MentorCard from "../components/mentorCard/MentorCard";
import MentorModal from "../components/MentorModal/MentorModal";
import Sidebar from "../../../components/layout/sidebar/Sidebar";
import SearchBar from "../../../components/ui/searchBar/SearchBar";
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

  const handleSearch = async (query) => {
    try {
      const results = await mentorAPI.searchMentors(query);
      setAllMentors(results);
    } catch (error) {
      toast.error("Ошибка при поиске менторов");
    }
  };

  return (
    <Layout>
      {isModalOpen && selectedMentor && (
        <MentorModal
          mentor={selectedMentor}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <h2 style={{ marginBottom: "20px" }}>Все менторы</h2>

      <SearchBar placeholder="Поиск менторов..." onSearch={handleSearch} />
      <div className={styles.mentorsCards}>
        {allMentors.map((card) => (
          <MentorCard key={card.id} {...card} onClick={handleCardClick} />
        ))}
      </div>
    </Layout>
  );
}

export default AllMentors;
