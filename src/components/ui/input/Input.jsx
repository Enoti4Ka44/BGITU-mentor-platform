import styles from "./Input.module.scss";
import Label from "../label/Label";

function Input(props) {
  return (
    <div>
      {props.label && <Label id={props.id}>{props.label}</Label>}

      <input className={styles.input} {...props} />
    </div>
  );
}

export default Input;
