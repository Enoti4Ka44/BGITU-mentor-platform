import styles from "./Label.module.scss";

function Label({ children, id }) {
  return (
    <label className={styles.label} htmlFor={id}>
      {children}
    </label>
  );
}

export default Label;
