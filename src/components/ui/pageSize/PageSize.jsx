import styles from "./PageSize.module.scss";

function PageSize({ pageSizes, onChange }) {
  return (
    <select
      className={styles.select}
      name="size"
      onChange={(e) => onChange(Number(e.target.value))}
    >
      {pageSizes &&
        pageSizes.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
    </select>
  );
}

export default PageSize;
