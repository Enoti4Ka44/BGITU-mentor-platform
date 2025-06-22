import { useNavigate } from "react-router";
import styles from "./Button.module.scss";

function Button(props) {
  const btnClass = `${styles.btn} ${styles[`btn--${props.color}`]}`;
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (props.onClick) {
      props.onClick(e);
    } else if (props.route) {
      navigate(`/${props.route}`);
    }
  };

  return (
    <button
      disabled={props.disabled}
      onClick={handleClick}
      className={btnClass}
    >
      {props.children}
    </button>
  );
}

export default Button;
