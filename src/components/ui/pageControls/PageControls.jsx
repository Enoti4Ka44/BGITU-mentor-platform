import PageSize from "../pageSize/PageSize";
import Pagination from "../pagination/Pagination";
import styles from "./PageControls.module.scss";

function PageControls({
  totalPages,
  currentPage,
  pageSizes,
  onSizeChange,
  onPageChange,
}) {
  return (
    <div className={styles.wrapper}>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onChange={onPageChange}
      />
      <PageSize pageSizes={pageSizes} onChange={onSizeChange} />
    </div>
  );
}

export default PageControls;
