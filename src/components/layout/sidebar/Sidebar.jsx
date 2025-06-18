import { useState } from "react";
import SidebarButton from "../../ui/sidebarButton/SidebarButton";
import styles from "./Sidebar.module.scss";

function Sidebar(props) {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.test}>
      <SidebarButton route="home">Главная</SidebarButton>
      <SidebarButton route="aticles">Статьи</SidebarButton>
      <SidebarButton route="mentors">Менторы</SidebarButton>
      <SidebarButton route="login">sing in</SidebarButton>
    </div>
  );
}

export default Sidebar;
