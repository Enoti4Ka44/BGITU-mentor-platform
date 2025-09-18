import styles from "./Pagination.module.scss";

function Pagination({ totalPages, currentPage, onChange }) {
  return (
    <div className={styles.pagination}>
      <button disabled={currentPage === 0} onClick={() => onChange(0)}>
        « Первая
      </button>

      <button
        disabled={currentPage === 0}
        onClick={() => onChange(currentPage - 1)}
      >
        «
      </button>

      <span>
        {currentPage + 1} / {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages - 1 || !totalPages}
        onClick={() => onChange(currentPage + 1)}
      >
        »
      </button>

      <button
        disabled={currentPage === totalPages - 1 || !totalPages}
        onClick={() => onChange(totalPages - 1)}
      >
        Последняя »
      </button>
    </div>
  );
}

export default Pagination;
