import styles from "./MentorModal.module.scss";
import Button from "../../../../components/ui/button/Button";
import Modal from "../../../../components/layout/modal/Modal";
import Vote from "../../../../components/ui/vote/Vote";
import ImageWrapper from "../../../../components/ui/imageWrapper/ImageWrapper";
import VkIcon from "../../../../assets/images/icons/vk-icon.png";
import TelegramIcon from "../../../../assets/images/icons/telegram-icon.png";
import { mentorshipAPI } from "../../../../services";
import { voteAPI } from "../../../../services";
import { toast } from "react-toastify";
import { useState } from "react";

function MentorModal({ mentor, onClose }) {
  const [activeVote, setActiveVote] = useState(null);
  const [rank, setRank] = useState(mentor.rank);
  const name = `${mentor.firstName} ${mentor.lastName}`;

  const handleSubmit = async () => {
    try {
      const data = {
        mentorId: mentor.id,
        message: "",
      };
      const sentRequest = await mentorshipAPI.postRequest(data);
      toast.success("Заявка успешно отправлена");
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  const handleVote = async (upvote) => {
    try {
      const response = await voteAPI.postMentorVote(mentor.id, upvote);
      toast.success("Ваш голос учтён");

      return response.rank;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className={styles.modalMentor}>
        <div className={styles.modalContent}>
          <h3 className={styles.modalName}>
            {name}
            <span className={styles.socials}>
              <a href={mentor.vkUrl} target="_blank">
                <img src={VkIcon} alt="" />
              </a>
              <a href={mentor.telegramUrl} target="_blank">
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
          <ImageWrapper imageUrl={mentor.avatarUrl} />
        </div>
      </div>

      <div className={styles.btnWrapper}>
        <Button onClick={handleSubmit} color="green">
          Отправить запрос
        </Button>
      </div>
      <div className={styles.vote}>
        <Vote onClick={handleVote} value={rank} setValue={setRank} />
      </div>
    </Modal>
  );
}

export default MentorModal;
