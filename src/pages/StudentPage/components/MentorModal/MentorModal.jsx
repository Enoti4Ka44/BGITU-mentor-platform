import styles from "./MentorModal.module.scss";
import Button from "../../../../components/ui/button/Button";
import Modal from "../../../../components/layout/modal/Modal";
import Vote from "../../../../components/ui/vote/Vote";
import CloseIcon from "../../../../assets/images/icons/close-icon.svg";
import VkIcon from "../../../../assets/images/icons/vk-icon.png";
import TelegramIcon from "../../../../assets/images/icons/telegram-icon.png";
import { mentorshipAPI } from "../../../../services";
import { voteAPI } from "../../../../services";
import { toast } from "react-toastify";
import { useState } from "react";

function MentorModal({ mentor, onClose }) {
  const [hasVoted, setHasVoted] = useState(false);
  const [vote, setVote] = useState("");
  const name = `${mentor.firstName} ${mentor.lastName}`;
  console.log(mentor);

  const handleSubmit = async (data) => {
    try {
      const data = {
        mentorId: mentor.id,
        message: "",
      };
      const sentRequest = await mentorshipAPI.postRequest(data);
      setHasVoted(true);
      setVote(vote ? "like" : "dis");
      toast.success("Заявка успешно отправлена");
    } catch (error) {
      toast.error(`${error}`);
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  const handleVote = async (upvote) => {
    try {
      const sentVote = await voteAPI.postMentorVote(mentor.id, upvote);

      toast.success("Ваш голос учтен");
    } catch (error) {
      toast.error(`${error}`);
      console.error("Ошибка при голосовании:", error);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <img src={CloseIcon} alt="" />{" "}
        </button>

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

        <div className={styles.btnWrapper}>
          <Button onClick={handleSubmit} color="green">
            Отправить запрос
          </Button>
        </div>
        <div className={styles.vote}>
          <Vote onClick={handleVote} id={mentor.id}>
            {mentor.rank}
          </Vote>
        </div>
      </div>
    </div>
  );
}

export default MentorModal;
