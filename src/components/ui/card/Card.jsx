import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={props.src} alt={props.alt} />
      </div>
      <h5>{props.title}</h5>
      <p>{props.text}</p>
    </div>
  );
}

export default Card;
