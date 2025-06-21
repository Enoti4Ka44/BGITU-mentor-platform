import styles from "./MyMentorCard.module.scss";
import VkIcon from "../../../assets/images/icons/vk-icon.png";
import TelegramIcon from "../../../assets/images/icons/telegram-icon.png";

function MyMentorCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.socials}>
          {/* <img src={VkIcon} alt="icon of vkontakte" />
          <img src={TelegramIcon} alt="icon of telegram" /> */}
        </div>
      </div>
    </div>
  );
}

export default MyMentorCard;
