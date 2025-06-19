import { useNavigate } from "react-router";
import styles from "./Button.module.scss";

function Button(props) {
  const btnClass = `${styles.btn} ${styles[`btn--${props.color}`]}`;
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (!props.route) return;
    navigate(`/${props.route}`);
  };

  return (
    <button onClick={handleNavigate} className={btnClass}>
      {props.children}
    </button>
  );
}

export default Button;
