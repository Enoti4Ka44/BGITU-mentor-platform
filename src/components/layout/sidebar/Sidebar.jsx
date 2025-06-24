import { useState } from "react";
import SidebarButton from "./components/sidebarButton/SidebarButton";
import Logo from "../../ui/logo/Logo";
import styles from "./Sidebar.module.scss";
import navigateTo from "../../../services/navigateTo";

import HomeIcon from "../../../assets/images/icons/home-icon.svg";
import ArticlesIcon from "../../../assets/images/icons/articles-icon.svg";
import LogoutIcon from "../../../assets/images/icons/logout-icon.svg";
import SettingsIcon from "../../../assets/images/icons/settings-icon.svg";
import ProfileIcon from "../../../assets/images/icons/profile-icon.svg";
import MentorsIcon from "../../../assets/images/icons/mentors-icon.svg";
import WriteArticleIcon from "../../../assets/images/icons/write-icon.png";

function Sidebar() {
  const navigation = navigateTo();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigation("welcome");
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebarContent}>
        <div className={styles.btnTop}>
          <Logo
            route={
              role === "ROLE_STUDENT"
                ? "student-home"
                : role === "ROLE_MENTOR"
                ? "mentor-home"
                : "welcome"
            }
          />
          <div className={styles.btnWrapper}>
            <SidebarButton
              icon={<img src={HomeIcon} />}
              route={
                role === "ROLE_STUDENT"
                  ? "student-home"
                  : role === "ROLE_MENTOR"
                  ? "mentor-home"
                  : "welcome"
              }
            >
              Главная
            </SidebarButton>

            {role === "ROLE_STUDENT" ? (
              <SidebarButton
                icon={<img src={MentorsIcon} />}
                route="all-mentors"
              >
                Менторы
              </SidebarButton>
            ) : (
              ""
            )}

            <SidebarButton icon={<img src={ArticlesIcon} />} route="articles">
              Статьи
            </SidebarButton>

            {role === "ROLE_MENTOR" ? (
              <SidebarButton
                icon={<img src={WriteArticleIcon} />}
                route="mentor-post-article"
              >
                Написать статью
              </SidebarButton>
            ) : (
              ""
            )}

            <SidebarButton
              icon={<img src={ProfileIcon} />}
              route={
                role === "ROLE_STUDENT"
                  ? "student-profile"
                  : role === "ROLE_MENTOR"
                  ? "mentor-profile"
                  : "welcome"
              }
            >
              Профиль
            </SidebarButton>
          </div>
        </div>
        <div className={styles.btnWrapper}>
          <SidebarButton icon={<img src={SettingsIcon} />}>
            Настройки
          </SidebarButton>
          <SidebarButton logout={logout} icon={<img src={LogoutIcon} />}>
            Выйти
          </SidebarButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
