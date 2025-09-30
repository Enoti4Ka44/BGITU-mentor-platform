import styles from "./MentorModal.module.scss";
import Button from "../../../../components/ui/button/Button";
import Modal from "../../../../components/layout/modal/Modal";
import Vote from "../../../../components/ui/vote/Vote";
import ImageWrapper from "../../../../components/ui/imageWrapper/ImageWrapper";
import { applicationsAPI, voteAPI } from "../../../../services";
import { toast } from "react-toastify";
import { useState } from "react";
import Socials from "../../../../components/ui/socials/Socials";

function MentorModal({ mentor, onClose }) {
  const [rank, setRank] = useState(mentor.rank);
  const name = `${mentor.firstName} ${mentor.lastName}`;

  const handleSubmit = async () => {
    try {
      const data = {
        mentorId: mentor.id,
        message: "",
      };
      const sentRequest = await applicationsAPI.postApplication(data);
      toast.success("Заявка успешно отправлена");
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  const handleVote = async (upvote) => {
    try {
      const response = await voteAPI.postMentorVote(mentor.id, upvote);
      if (response.rank !== undefined) {
        setRank(response.rank);
      }
      toast.success("Ваш голос учтён");
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
            <Socials />
          </h3>
          <p className={styles.modalText}>
            <span>Специальность:</span>{" "}
            {mentor.speciality ? mentor.speciality : "Не указано"}
          </p>
          <p className={styles.modalText}>
            <span>Описание:</span> {mentor.description}
          </p>
          <p className={styles.modalText}>
            <span>Рейтинг:</span> {rank}
          </p>
        </div>
        <div className={styles.imgWrapper}>
          <ImageWrapper imageUrl={mentor.avatarUrl} />
        </div>
      </div>

      <div className={styles.btnWrapper}>
        <Vote voteResult={mentor.voteResult} onClick={handleVote} value={rank}>
          {rank}
        </Vote>
        <Button onClick={handleSubmit} color="green">
          Отправить запрос
        </Button>
      </div>
    </Modal>
  );
}

export default MentorModal;
