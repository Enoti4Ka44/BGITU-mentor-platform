import styles from "./ImageWrapper.module.scss";
import ProfileHolder from "../../../assets/images/icons/profile-holder-icon.svg";
import { useState, useEffect } from "react";
import { authHeader } from "../../../services/api/authHeader";
import { BASE_URL } from "../../../config";

function ImageWrapper({ imgUrl }) {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (!imgUrl) return;

    // Создаем URL с токеном авторизации
    const url = new URL(`${BASE_URL}${imgUrl}`);
    const headers = authHeader();

    if (headers.Authorization) {
      url.searchParams.append(
        "token",
        headers.Authorization.replace("Bearer ", "")
      );
    }

    setImageSrc(url.toString());
  }, [imgUrl]);

  return (
    <div className={styles.imageWrapper}>
      {!imgUrl ? (
        <img
          className={styles.imagePlug}
          src={ProfileHolder}
          alt="profile holder"
        />
      ) : (
        <img
          className={styles.userAvatar}
          src={imageSrc}
          alt="user avatar"
          crossOrigin="anonymous"
        />
      )}
    </div>
  );
}

export default ImageWrapper;
