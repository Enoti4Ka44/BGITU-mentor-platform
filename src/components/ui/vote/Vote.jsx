import styles from "./Vote.module.scss";
import ThumbUpIcon from "../../../assets/images/icons/thumbUp-icon.svg?react";
import ThumbDownIcon from "../../../assets/images/icons/thumbDown-icon.svg?react";

function Vote({ children, onClick }) {
  return (
    <div className={styles.vote}>
      <ThumbUpIcon onClick={() => onClick(true)} className={styles.thumbUp} />
      {children}
      <ThumbDownIcon
        onClick={() => onClick(false)}
        className={styles.thumbDown}
      />
    </div>
  );
}

export default Vote;
