import styles from "./ImageWrapper.module.scss";
import ProfileHolder from "../../../assets/images/icons/profile-holder-icon.svg";
import { useState, useEffect } from "react";
import { authHeader } from "../../../services/authHeader";
import { BASE_URL } from "../../../config";

function ImageWrapper({ imageUrl }) {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (!imageUrl) return;

    const url = new URL(`${BASE_URL}${imageUrl}`);
    const headers = authHeader();

    if (headers.Authorization) {
      url.searchParams.append(
        "token",
        headers.Authorization.replace("Bearer ", "")
      );
    }

    setImageSrc(url.toString());
  }, [imageUrl]);

  return (
    <div className={styles.imageWrapper}>
      {!imageUrl ? (
        <img
          className={styles.imagePlug}
          src={ProfileHolder}
          alt="profile holder"
        />
      ) : (
        <img
          className={styles.userAvatar}
          src={imageSrc}
          alt="image"
          crossOrigin="anonymous"
        />
      )}
    </div>
  );
}

export default ImageWrapper;
