import styles from "./MyMentorCard.module.scss";
import StarIcon from "../../../../assets/images/icons/star-icon.png";
import ImageWrapper from "../../../../components/ui/imageWrapper/ImageWrapper";
import Button from "../../../../components/ui/button/Button";
import Socials from "../../../../components/ui/socials/Socials";

function MyMentorCard({ studentMentor, onClick }) {
  const name = `${studentMentor.firstName} ${studentMentor.lastName}`;
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardContentTop}>
          <h3>{name}</h3>
          <div>
            <Socials
              vkUrl={studentMentor.vkUrl}
              telegramUrl={studentMentor.telegramUrl}
            />
          </div>
        </div>

        <h4 className={styles.cardSpeciality}>{studentMentor.speciality}</h4>
        <p className={styles.cardDescription}>{studentMentor.description}</p>
        <p className={styles.rank}>
          Рейтинг:{" "}
          <span>
            {studentMentor.rank}
            <img src={StarIcon} alt="" />
          </span>
        </p>
        <Button onClick={onClick} color="red">
          Отказаться от ментора
        </Button>
      </div>

      <div className={styles.imgWrapper}>
        <ImageWrapper imageUrl={studentMentor.avatarUrl} />
      </div>
    </div>
  );
}

export default MyMentorCard;
