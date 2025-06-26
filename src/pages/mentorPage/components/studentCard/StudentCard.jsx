import styles from "./StudentCard.module.scss";
import Button from "../../../../components/ui/button/Button";
import ImageWrapper from "../../../../components/ui/imageWrapper/ImageWrapper";
import VkIcon from "../../../../assets/images/icons/vk-icon2.png";
import TelegramIcon from "../../../../assets/images/icons/telegram-icon.png";
import Socials from "../../../../components/ui/socials/Socials";

function StudentCard({ student, onClick }) {
  const name = `${student.firstName} ${student.lastName}`;

  const handleRedirect = () => {
    window.open(student.vkUrl, "_blank");
  };

  return (
    <div className={styles.studentCard}>
      <div className={styles.avatar}>
        <ImageWrapper imageUrl={student.avatarUrl} />
      </div>
      <div className={styles.cardContent}>
        <h4>{name}</h4>

        {student.description ? (
          <p className={styles.description}>{student.description}</p>
        ) : (
          <p className={styles.description}>Описание не добавлено</p>
        )}

        <div className={styles.studentSocials}>
          <Socials vkUrl={student.vkUrl} telegramUrl={student.telegramUrl} />
        </div>
        <Button
          color="green"
          onClick={handleRedirect}
          disabled={!student.vkUrl}
        >
          <img src={VkIcon} alt="icon of vk" /> Написать в ВК
        </Button>
        <Button color="red" onClick={() => onClick(student.id)}>
          Отказаться от студента
        </Button>
      </div>
    </div>
  );
}

export default StudentCard;
