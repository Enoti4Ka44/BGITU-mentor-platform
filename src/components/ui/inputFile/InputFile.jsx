import styles from "./InputFile.module.scss";
import { useRef, useState } from "react";
import Label from "../label/Label";
import "./InputFile.module.scss";

function InputFile({ label, id, onChange, ...props }) {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
    else setFileName("");
    if (onChange) onChange(e);
  };

  return (
    <div>
      {label && <Label id={id}>{label}</Label>}

      <div className={styles.fileWrapper}>
        <button
          type="button"
          className={styles.fileButton}
          onClick={handleClick}
        >
          Выбрать файл
        </button>

        <span className={styles.fileName}>
          {" "}
          {fileName || "Файл не выбран"}{" "}
        </span>

        <input
          ref={fileInputRef}
          type="file"
          id={id}
          className={styles.fileHidden}
          onChange={handleChange}
          {...props}
        />
      </div>
    </div>
  );
}

export default InputFile;
