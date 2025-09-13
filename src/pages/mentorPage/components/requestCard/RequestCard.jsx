import styles from "./RequestCard.module.scss";
import ImageWrapper from "../../../../components/ui/imageWrapper/ImageWrapper";
import VkIcon from "../../../../assets/images/icons/vk-icon.png";
import TelegramIcon from "../../../../assets/images/icons/telegram-icon.png";
import Button from "../../../../components/ui/button/Button";
import { useState } from "react";
import { applicationsAPI } from "../../../../services/api/applicationsAPI.js";
import { toast } from "react-toastify";

function RequestCard({ request }) {
  const { student, status } = request;

  const name = `${student.firstName} ${student.lastName}`;
  const statusTranslations = {
    PENDING: "В ожидании",
    ACCEPTED: "Принята",
    REJECTED: "Отклонена",
    EXPIRED: "Неактуально",
  };

  const handleClick = async (choise) => {
    try {
      const data = {
        applicationId: request.id,
        accepted: choise,
      };

      const respone = await applicationsAPI.patchApplicationResponse(data);
      toast.success(choise ? "Заявка принята" : "Заявка отклонена");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div>
          <div className={styles.contentTop}>
            <h4 className={styles.name}>
              {name}
              <span
                className={`${styles.status} ${styles[status.toLowerCase()]}`}
              >
                {statusTranslations[status] || status}
              </span>
            </h4>

            <div className={styles.socials}>
              <a href={student.vk} target="_blank">
                <img src={VkIcon} alt="icon of vkontakte" />
              </a>
              <a href={student.telegram} target="_blank">
                <img src={TelegramIcon} alt="icon of telegram" />
              </a>
            </div>
          </div>

          <p className={styles.description}>{student.description}</p>
        </div>
        {status === "PENDING" && (
          <div className={styles.btnWrapper}>
            <Button
              className={styles.acceptBtn}
              color="green"
              onClick={() => handleClick(true)}
            >
              Принять
            </Button>
            <Button
              className={styles.rejectBtn}
              color="red"
              onClick={() => handleClick(false)}
            >
              Отклонить
            </Button>
          </div>
        )}
      </div>

      <div className={styles.imageWrapper}>
        <ImageWrapper imageUrl={student.avatarUrl} />
      </div>
    </div>
  );
}

export default RequestCard;
