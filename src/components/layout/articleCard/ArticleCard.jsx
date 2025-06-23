import styles from "./ArticleCard.module.scss";
import ImageWrapper from "../../ui/imageWrapper/ImageWrapper";
import StarIcon from "../../../assets/images/icons/star-icon.png";

function ArticleCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardTop}>
          <a className={styles.cardTitle}>{props.title}</a>
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
        <ImageWrapper imgUrl={props.imageUrl} />
      </div>
    </div>
  );
}

export default ArticleCard;
