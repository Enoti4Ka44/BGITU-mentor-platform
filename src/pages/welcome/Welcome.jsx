import Card from "../../components/ui/card/Card";
import Button from "../../components/ui/button/Button";
import cardImage1 from "../../assets/images/backgrounds/cards-img1.png";
import cardImage2 from "../../assets/images/backgrounds/cards-img2.png";
import cardImage3 from "../../assets/images/backgrounds/cards-img3.png";
import styles from "./Welcome.module.scss";

function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Общайтесь с профессионалами — создавайте своё будущее</h1>
        <h5>
          Найдите наставников, которые прошли ваш путь. Получайте ценные советы,
          расширяйте круг общения и достигайте своих целей.
        </h5>
        <div className={styles.btnWrapper}>
          <Button route="login" color="white">
            Войти
          </Button>
          <Button route="register" color="black">
            Зарегестрироваться
          </Button>
        </div>
      </div>

      <div>
        <h2>Раскройте свой потенциал</h2>
        <h5 className={styles.subtitle}>
          Наша платформа соединит вас с опытными менторами, которые дадут
          рекомендации, поддержку и полезные знания, чтобы достичь успеха.
        </h5>

        <div className={styles.cards}>
          <Card
            src={cardImage1}
            alt="card image"
            title="Индивидуальное наставничество"
            text="Получайте индивидуальные советы и поддержку от менторов со схожими стремлениями."
          />
          <Card
            src={cardImage2}
            alt="card image"
            title="Возможности для нетворкинга"
            text="Расширяйте профессиональные связи, общаясь с людьми в вашей сфере интересов."
          />
          <Card
            src={cardImage3}
            alt="card image"
            title="Карьерный рост"
            text="Получите конкурентное преимущество на пути к карьере с помощью советов опытных профессионалов."
          />
          <Card
            src={cardImage1}
            alt="card image"
            title="Индивидуальное наставничество"
            text="Получайте индивидуальные советы и поддержку от менторов со схожими стремлениями."
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
