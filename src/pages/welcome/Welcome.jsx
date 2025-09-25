import Card from "../../components/ui/card/Card";
import Button from "../../components/ui/button/Button";
import Logo from "../../components/ui/logo/Logo";
import cardImage1 from "../../assets/images/icons/cards-img1.svg";
import cardImage2 from "../../assets/images/icons/cards-img2.svg";
import cardImage3 from "../../assets/images/icons/cards-img3.svg";
import peopleHeroIcon from "../../assets/images/icons/people-hero.png";
import styles from "./Welcome.module.scss";

function Welcome() {
  return (
    <div style={{ paddingBottom: "10px" }}>
      <div className={styles.container}>
        <Logo route="/" />
        <div className={styles.hero}>
          <h1>Делись мудростью, формируй успех</h1>
          <div className={styles.content}>
            <h4>
              Прямое подключение студентов к выпускникам для карьерного роста и
              академической поддержки <br /> <br />
              Ваш мост между университетом и профессиональным успехом
            </h4>
            <img src={peopleHeroIcon} alt="" />
          </div>
          <div className={styles.btnWrapper}>
            <Button route="login" color="white">
              Войти
            </Button>
            <Button route="register" color="black">
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </div>

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
      </div>
    </div>
  );
}

export default Welcome;
