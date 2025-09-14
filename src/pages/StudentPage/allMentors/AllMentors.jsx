import { mentorAPI } from "../../../services";
import styles from "./AllMentors.module.scss";
import { toast } from "react-toastify";
import Layout from "../../../components/layout/Layout";
import MentorCard from "../components/mentorCard/MentorCard";
import MentorModal from "../components/MentorModal/MentorModal";
import SearchBar from "../../../components/ui/searchBar/SearchBar";
import { useEffect, useState } from "react";
import Pagination from "../../../components/ui/pagination/Pagination";

function AllMentors() {
  const [allMentors, setAllMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({
    specialityId: null,
    query: "",
    page: 0,
    size: 6,
    sort: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await mentorAPI.getAllMentors(filters);
        setAllMentors(data.content);
        setTotalPages(data.page.totalPages);
      } catch (error) {
        console.log("Ошибка", error);
      }
    };
    fetchData();
  }, [filters]);

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

  const handleSearch = (query) => {
    setFilters((prev) => ({
      ...prev,
      query,
      page: 0,
    }));
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

      <Pagination
        totalPages={totalPages}
        currentPage={filters.page}
        onChange={(newPage) =>
          setFilters((prev) => ({ ...prev, page: newPage }))
        }
      />
    </Layout>
  );
}

export default AllMentors;
