import { useEffect, useState } from "react";
import { mentorAPI } from "../../../services";
import { toast } from "react-toastify";
import styles from "./AllMentors.module.scss";
import Layout from "../../../components/layout/Layout";
import MentorCard from "../components/mentorCard/MentorCard";
import MentorModal from "../components/MentorModal/MentorModal";
import SearchBar from "../../../components/ui/searchBar/SearchBar";
import Button from "../../../components/ui/button/Button";
import PageControls from "../../../components/ui/pageControls/PageControls";
import FilterSpecialities from "../../../components/ui/filterSpecialities/FilterSpecialities";

function AllMentors() {
  const [allMentors, setAllMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({
    specialityId: "",
    query: "",
    page: 0,
    size: 10,
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

  const handleFilterInputChange = (e) => {
    setFilters((prev) => ({ ...prev, specialityId: Number(e.target.value) }));
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
      <div className={styles.sorting}>
        <FilterSpecialities
          value={filters.specialityId}
          onChange={handleFilterInputChange}
        />
        <Button
          color="black"
          onClick={() => setFilters((prev) => ({ ...prev, specialityId: "" }))}
        >
          Очистить
        </Button>
      </div>

      <div className={styles.mentorsCards}>
        {allMentors.map((card) => (
          <MentorCard key={card.id} {...card} onClick={handleCardClick} />
        ))}
      </div>

      <PageControls
        totalPages={totalPages}
        currentPage={filters.page}
        pageSizes={[10, 25, 50]}
        onPageChange={(newPage) =>
          setFilters((prev) => ({ ...prev, page: newPage }))
        }
        onSizeChange={(newSize) =>
          setFilters((prev) => ({ ...prev, size: newSize }))
        }
      />
    </Layout>
  );
}

export default AllMentors;
