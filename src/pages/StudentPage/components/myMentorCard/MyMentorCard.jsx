import styles from "./MyMentorCard.module.scss";
import TelegramIcon from "../../../../assets/images/icons/telegram-icon.png";
import VkIcon from "../../../../assets/images/icons/vk-icon.png";

function MyMentorCard(props) {
  const name = `${props.firstName} ${props.lastName}`;
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardContentTop}>
          <h3>{name}</h3>
          <div className={styles.socials}>
            <a href={props.vk} target="_blank">
              <img src={VkIcon} alt="icon of vkontakte" />
            </a>
            <a href={props.telegram} target="_blank">
              <img src={TelegramIcon} alt="icon of telegram" />
            </a>
          </div>
        </div>

        <h4 className={styles.cardSpeciality}>{props.speciality}</h4>
        <p className={styles.cardDescription}>{props.description}</p>
      </div>
      <div className={styles.imgWrapper}>
        {props.src ? (
          <img src={props.src} alt="" />
        ) : (
          <div className={styles.plug}></div>
        )}
      </div>
    </div>
  );
}

export default MyMentorCard;
