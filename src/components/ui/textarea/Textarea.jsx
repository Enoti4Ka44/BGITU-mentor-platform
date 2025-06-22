import styles from "./Textarea.module.scss";
import Label from "../label/Label";

function Textarea(props) {
  return (
    <div>
      {props.label && <Label id={props.id}>{props.label}</Label>}
      <textarea className={styles.textarea} {...props} />
    </div>
  );
}

export default Textarea;
