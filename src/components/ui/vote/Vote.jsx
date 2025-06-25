import styles from "./Vote.module.scss";
import ThumbUpIcon from "../../../assets/images/icons/thumbUp-icon.svg?react";
import ThumbDownIcon from "../../../assets/images/icons/thumbDown-icon.svg?react";
import { useState } from "react";

function Vote({ children, onClick }) {
  const [userVote, setUserVote] = useState(null);

  const handleVote = async (upvote) => {
    try {
      const newRank = await onClick(upvote);
      setUserVote(upvote ? "up" : "down");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.vote}>
      <ThumbUpIcon
        onClick={() => handleVote(true)}
        className={`${styles.thumbUp} ${
          userVote === "up" ? styles.active : ""
        }`}
      />
      {children}
      <ThumbDownIcon
        onClick={() => handleVote(false)}
        className={`${styles.thumbDown} ${
          userVote === "down" ? styles.active : ""
        }`}
      />
    </div>
  );
}

export default Vote;
