import styles from "./Select.module.scss";

function Select(props) {
  return (
    <div>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      <div className={styles.customSelect}>
        <select
          className={styles.select}
          name={props.name}
          value={props.value}
          id={props.name}
          onChange={props.onChange}
        >
          {props.placeholder && (
            <option value="" disabled>
              {props.placeholder}
            </option>
          )}
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;
