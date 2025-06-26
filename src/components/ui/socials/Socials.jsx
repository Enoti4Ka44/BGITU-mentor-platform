import styles from "./Socials.module.scss";
import VkIcon from "../../../assets/images/icons/vk-icon.png";
import TelegramIcon from "../../../assets/images/icons/telegram-icon.png";

function Socials({ vkUrl, telegramUrl }) {
  return (
    <div className={styles.socials}>
      <a href={vkUrl}>
        <img src={VkIcon} alt="icon of vk" />
      </a>
      <a href={telegramUrl}>
        <img src={TelegramIcon} alt="icon of telegram" />
      </a>
    </div>
  );
}

export default Socials;
