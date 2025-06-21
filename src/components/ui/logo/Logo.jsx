import navigateTo from "../../../services/navigateTo";
import styles from "./Logo.module.scss";

function Logo({ route }) {
  const navigation = navigateTo();

  return (
    <a className={styles.logo} onClick={() => navigation(route)}>
      MentorShip
    </a>
  );
}

export default Logo;
