import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styles from "./SidebarButton.module.scss";

function SidebarButton({ children, route, icon, logout }) {
  const location = useLocation();
  const isActive = location.pathname === `${route}`;
  const navigate = useNavigate();

  return (
    <button
      className={`${styles.sidebarButton} ${isActive ? styles.active : ""}`}
      onClick={() => (route ? navigate(route) : logout ? logout() : "")}
    >
      {icon && <span className={styles.icon}> {icon} </span>}
      {children}
    </button>
  );
}

export default SidebarButton;
