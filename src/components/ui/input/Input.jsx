import styles from "./Input.module.scss";

function Input(props) {
  return (
    <div>
      {props.label && (
        <label className={styles.label} htmlFor={props.id}>
          {props.label}
        </label>
      )}

      <input className={styles.input} {...props} />
    </div>
  );
}

export default Input;
