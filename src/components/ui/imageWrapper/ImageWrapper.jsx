import styles from "./ImageWrapper.module.scss";
import ProfileHolder from "../../../assets/images/icons/profile-holder-icon.svg";
import { useState, useEffect } from "react";
import { authHeader } from "../../../services/authHeader";
import { BASE_URL } from "../../../config";

function ImageWrapper({ imageUrl }) {
  const src = `${BASE_URL}${imageUrl}`;
  return (
    <div className={styles.imageWrapper}>
      {!imageUrl ? (
        <img
          className={styles.imagePlug}
          src={ProfileHolder}
          alt="profile holder"
        />
      ) : (
        <img className={styles.userAvatar} src={src} alt="image" />
      )}
    </div>
  );
}

export default ImageWrapper;
