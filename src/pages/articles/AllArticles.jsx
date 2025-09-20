import { useEffect, useState } from "react";
import { articlesAPI, specialitiesAPI } from "../../services";
import { toast } from "react-toastify";
import styles from "./AllArticles.module.scss";
import Layout from "../../components/layout/Layout";
import ArticleCard from "../../components/layout/articleCard/ArticleCard";
import ArticleModal from "./components/articleModal/ArticleModal";
import SearchBar from "../../components/ui/searchBar/SearchBar";
import PageControls from "../../components/ui/pageControls/PageControls";
import FilterRank from "../../components/ui/filterRank/FilterRank";
import FilterSpecialities from "../../components/ui/filterSpecialities/filterSpecialities";
import Button from "../../components/ui/button/Button";

function AllArticles() {
  const [allArticles, setAllArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
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
    const fetchArticlesData = async () => {
      try {
        const data = await articlesAPI.getAllArticles(filters);
        setAllArticles(data.content);
        setTotalPages(data?.page?.totalPages ?? 0);
      } catch (error) {
        console.log("Ошибка", error);
      }
    };
    fetchArticlesData();
  }, [filters]);

  const handleCardClick = async (articleId) => {
    try {
      const fullArticleData = await articlesAPI.getArticleById(articleId);
      setSelectedArticle(fullArticleData);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Ошибка загрузки данных", error);
      toast.error("Ошибка загрузки данных");
    }
  };

  const handleSearch = async (query) => {
    setFilters((prev) => ({
      ...prev,
      query,
      page: 0,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Layout>
      {isModalOpen && selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <h2>Все статьи</h2>
      <SearchBar placeholder="Поиск статей..." onSearch={handleSearch} />
      <div className={styles.sorting}>
        <FilterSpecialities
          value={filters.specialityId}
          onChange={handleInputChange}
        />
        <FilterRank value={filters.sort} onChange={handleInputChange} />
        <Button
          color="black"
          onClick={() =>
            setFilters((prev) => ({
              ...prev,
              specialityId: "",
              sort: "",
            }))
          }
        >
          Очистить
        </Button>
      </div>

      <div className={styles.articlesCard}>
        {allArticles.map((card) => (
          <ArticleCard key={card.id} {...card} onClick={handleCardClick} />
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
          setFilters((prev) => ({ ...prev, page: 0, size: newSize }))
        }
      />
    </Layout>
  );
}

export default AllArticles;
