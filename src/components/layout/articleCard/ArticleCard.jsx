import styles from "./ArticleCard.module.scss";
import ImageWrapper from "../../ui/imageWrapper/ImageWrapper";
import StarIcon from "../../../assets/images/icons/star-icon.png";
import Button from "../../ui/button/Button";

function ArticleCard({ onClick, ...props }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardTop}>
          <a className={styles.cardTitle} onClick={() => onClick(props.id)}>
            {props.title}
          </a>
          <p className={styles.cardDescription}> {props.content}</p>
        </div>
        <div className={styles.cardBottom}>
          <p className={styles.cardSpeciality}>{props.speciality}</p>
          <p className={styles.cardRank}>
            {props.rank} <img src={StarIcon} alt="" />{" "}
          </p>
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <ImageWrapper imageUrl={props.imageUrl} />
      </div>
    </div>
  );
}

export default ArticleCard;
