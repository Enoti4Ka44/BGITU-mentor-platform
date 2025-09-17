import { articlesAPI } from "../../services";
import styles from "./AllArticles.module.scss";
import { toast } from "react-toastify";
import Pagination from "../../components/ui/pagination/Pagination";
import Layout from "../../components/layout/Layout";
import ArticleCard from "../../components/layout/articleCard/ArticleCard";
import ArticleModal from "./components/articleModal/ArticleModal";
import SearchBar from "../../components/ui/searchBar/SearchBar";
import { useEffect, useState } from "react";
import PageSize from "../../components/ui/pageSize/PageSize";

function AllArticles() {
  const [allArticles, setAllArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({
    specialityId: null,
    query: "",
    page: 0,
    size: 10,
    sort: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await articlesAPI.getAllArticles(filters);
        setAllArticles(data.content);
        setTotalPages(data?.page?.totalPages ?? 0);
      } catch (error) {
        console.log("Ошибка", error);
      }
    };
    fetchData();
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

  return (
    <Layout>
      {isModalOpen && selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <h2>Все статьи</h2>
      <div className={styles.articlesCard}>
        <SearchBar placeholder="Поиск статей..." onSearch={handleSearch} />
        {allArticles.map((card) => (
          <ArticleCard key={card.id} {...card} onClick={handleCardClick} />
        ))}
      </div>

      <Pagination
        currentPage={filters.page}
        totalPages={totalPages}
        onChange={(newPage) =>
          setFilters((prev) => ({ ...prev, page: newPage }))
        }
      />

      <PageSize
        pageSizes={[10, 25, 50]}
        onChange={(newSize) =>
          setFilters((prev) => ({ ...prev, size: newSize }))
        }
      />
    </Layout>
  );
}

export default AllArticles;
