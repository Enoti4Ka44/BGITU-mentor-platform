import { useNavigate } from "react-router";
import styles from "./Logo.module.scss";

function Logo({ route }) {
  const navigate = useNavigate();

  return (
    <a className={styles.logo} onClick={() => navigate(route)}>
      MentorShip
    </a>
  );
}

export default Logo;
