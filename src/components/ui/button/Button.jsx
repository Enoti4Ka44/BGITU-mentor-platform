import { useNavigate } from "react-router";
import styles from "./Button.module.scss";

function Button({ color, onClick, route, disabled, children }) {
  const btnClass = `${styles.btn} ${styles[`btn--${color}`]}`;
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    } else if (route) {
      navigate(`/${route}`);
    }
  };

  return (
    <button disabled={disabled} onClick={handleClick} className={btnClass}>
      {children}
    </button>
  );
}

export default Button;
