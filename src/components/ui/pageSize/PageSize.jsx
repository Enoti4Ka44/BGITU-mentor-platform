import InputSelect from "../inputSelect/InputSelect";

function PageSize({ pageSizes, onChange }) {
  return (
    <select name="size" onChange={(e) => onChange(Number(e.target.value))}>
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
