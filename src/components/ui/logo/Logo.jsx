import { useNavigate } from "react-router";
import styles from "./Logo.module.scss";

function Logo(props) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (!props.route) return;
    navigate(`/${props.route}`);
  };
  return (
    <a className={styles.logo} onClick={handleNavigate}>
      MentorShip
    </a>
  );
}

export default Logo;
