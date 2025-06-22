import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styles from "./SidebarButton.module.scss";
import navigateTo from "../../../../../services/navigateTo";

function SidebarButton({ children, route, icon, logout }) {
  const location = useLocation();
  const isActive = location.pathname === `/${route}`;
  const navigation = navigateTo();

  return (
    <button
      className={`${styles.sidebarButton} ${isActive ? styles.active : ""}`}
      onClick={() => (route ? navigation(route) : logout ? logout() : "")}
    >
      {icon && <span className={styles.icon}> {icon} </span>}
      {children}
    </button>
  );
}

export default SidebarButton;
