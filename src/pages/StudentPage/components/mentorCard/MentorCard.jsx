import styles from "./MentorCard.module.scss";
import StarIcon from "../../../../assets/images/icons/star-icon.png";

function MentorCard({ onClick, ...props }) {
  const name = `${props.firstName} ${props.lastName}`;
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper} onClick={() => onClick(props.id)}>
        {props.src ? (
          <img src={props.src} alt="mentor's photo" />
        ) : (
          <div className={styles.imgPlug}></div>
        )}
      </div>
      <div className={styles.cardContent}>
        <h4>{name}</h4>
        <p className={styles.cardSpeciality}>
          {props.speciality ? props.speciality : "Специальность не указана"}
        </p>
        {props.description ? (
          <p className={styles.cardShortDescription}>{props.description}</p>
        ) : (
          ""
        )}
        <p className={styles.cardRank}>
          {props.rank ? props.rank : "0"}
          <span>
            <img src={StarIcon} alt="image of star" />
          </span>
        </p>
      </div>
    </div>
  );
}

export default MentorCard;
