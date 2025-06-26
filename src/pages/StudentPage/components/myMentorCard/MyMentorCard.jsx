import styles from "./MyMentorCard.module.scss";
import TelegramIcon from "../../../../assets/images/icons/telegram-icon.png";
import VkIcon from "../../../../assets/images/icons/vk-icon.png";
import ImageWrapper from "../../../../components/ui/imageWrapper/ImageWrapper";
import Button from "../../../../components/ui/button/Button";

function MyMentorCard({ studentMentor, onClick }) {
  const name = `${studentMentor.firstName} ${studentMentor.lastName}`;
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardContentTop}>
          <h3>{name}</h3>
          <div className={styles.socials}>
            <a href={studentMentor.vkUrl} target="_blank">
              <img src={VkIcon} alt="icon of vkontakte" />
            </a>
            <a href={studentMentor.telegramUrl} target="_blank">
              <img src={TelegramIcon} alt="icon of telegram" />
            </a>
          </div>
        </div>

        <h4 className={styles.cardSpeciality}>{studentMentor.speciality}</h4>
        <p className={styles.cardDescription}>{studentMentor.description}</p>
        <div className={styles.footer}>
          <p className={styles.rank}>
            Рейтинг: <span>{studentMentor.rank}</span>
          </p>
          <div className={styles.btnWrapper}>
            <Button onClick={onClick} color="red">
              Отказаться от ментора
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <ImageWrapper imageUrl={studentMentor.avatarUrl} />
      </div>
    </div>
  );
}

export default MyMentorCard;
