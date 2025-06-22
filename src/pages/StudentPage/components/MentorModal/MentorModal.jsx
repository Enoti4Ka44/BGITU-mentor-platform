import styles from "./MentorModal.module.scss";
import Button from "../../../../components/ui/button/Button";
import CloseIcon from "../../../../assets/images/icons/close-icon.svg";
import VkIcon from "../../../../assets/images/icons/vk-icon.png";
import TelegramIcon from "../../../../assets/images/icons/telegram-icon.png";
import { mentorshipAPI } from "../../../../services";
import { toast } from "react-toastify";

function MentorModal({ mentor, onClose }) {
  const name = `${mentor.firstName} ${mentor.lastName}`;

  const handleSubmit = async (data) => {
    try {
      const data = {
        mentorId: mentor.id,
        message: "",
      };
      const sentRequest = await mentorshipAPI.postRequest(data);
      toast.success("Заявка успешно отправлена");
    } catch (error) {
      toast.error("Ошибка при отправке запроса");
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <img src={CloseIcon} alt="" />{" "}
        </button>
        <div className={styles.btnWrapper}>
          <Button onClick={handleSubmit} color="green">
            Отправить запрос
          </Button>
        </div>

        <div className={styles.modalContent}>
          <h3 className={styles.modalName}>
            {name}
            <span className={styles.socials}>
              <a href={mentor.vkUrl}>
                <img src={VkIcon} alt="" />
              </a>
              <a href={mentor.telegramUrl}>
                <img src={TelegramIcon} alt="" />
              </a>
            </span>
          </h3>
          <p className={styles.modalSpeciality}>
            <span>Специальность:</span>{" "}
            {mentor.speciality ? mentor.speciality : "Не указано"}
          </p>
          <p className={styles.modalDescription}>
            <span>Описание:</span> {mentor.description}
          </p>
          <p className={styles.modalRank}>
            <span>Рейтинг:</span> {mentor.rank}
          </p>
        </div>
        <div className={styles.imgWrapper}>
          {mentor.avatarUrl ? (
            <img src={mentor.avatarUrl} alt="" />
          ) : (
            <div className={styles.plug}></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MentorModal;
