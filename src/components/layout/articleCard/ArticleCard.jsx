import styles from "./ArticleCard.module.scss";

function ArticleCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <a>{props.title}</a>
        <p>{props.descrtiption}</p>
      </div>
      <div className={styles.imgWrapper}>
        <img src={props.src} alt="preview image" />
      </div>
    </div>
  );
}

export default ArticleCard;
