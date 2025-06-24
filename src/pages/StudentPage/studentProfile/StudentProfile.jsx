import Layout from "../../../components/layout/Layout";
import Input from "../../../components/ui/input/Input";
import Textarea from "../../../components/ui/textarea/Textarea";
import styles from "./StudentProfile.module.scss";
import InputFile from "../../../components/ui/inputFile/InputFile";
import ImageWrapper from "../../../components/ui/imageWrapper/ImageWrapper";
import Button from "../../../components/ui/button/Button";
import { useEffect, useState } from "react";
import { studentAPI } from "../../../services";
import { toast } from "react-toastify";

function StudentProfile(props) {
  const [studentData, setStudentData] = useState([]);
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    description: "",
    vkUrl: "",
    telegramUrl: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await studentAPI.getStudentSummary();
        setFormData({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          telegramUrl: data.telegramUrl || "",
          vkUrl: data.vkUrl || "",
          description: data.description || "",
        });
        if (data.avatarUrl) {
          setAvatarUrl(data.avatarUrl);
        }
      } catch (error) {
        console.log("Ошибка при загрузке данных", error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = new FormData();

      const cardBlob = new Blob(
        [
          JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            description: formData.description,
            vkUrl: formData.vkUrl,
            telegramUrl: formData.telegramUrl,
          }),
        ],
        { type: "application/json" }
      );

      dataToSend.append("card", cardBlob);

      if (avatarFile) {
        dataToSend.append("avatar", avatarFile);
      }

      const response = await studentAPI.patchStudentSummary(dataToSend);
      toast.success("Данные успешно обновлены");
      console.log("Данные успешно обновлены:", response);
    } catch (error) {
      console.error("Ошибка при обновлении:", error);
    }
  };

  return (
    <Layout>
      <>
        <h2>Профиль</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
            <div className={styles.inputContainer}>
              <Input
                value={formData.firstName}
                name="firstName"
                id="firstName"
                type="text"
                required={true}
                label="Имя"
                placeholder="Имя"
                onChange={handleInputChange}
              />
              <Input
                value={formData.lastName}
                name="lastName"
                id="lastName"
                type="text"
                required={true}
                label="Фамилия"
                placeholder="Фамилия"
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.inputContainer}>
              <Input
                value={formData.telegramUrl}
                name="telegramUrl"
                id="telegramUrl"
                type="text"
                label="Телеграм"
                placeholder="Телеграм тег"
                onChange={handleInputChange}
              />
              <Input
                value={formData.vkUrl}
                name="vkUrl"
                id="vkUrl"
                type="text"
                label="Вконтакте"
                placeholder="Профиль ВК"
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.imageWrapper}>
              <ImageWrapper imgUrl={avatarUrl} />
            </div>
          </div>

          <div className={styles.inputContainer}>
            <Textarea
              value={formData.description}
              name="description"
              id="description"
              type="text"
              label="Описание"
              placeholder="Введите текст"
              onChange={handleInputChange}
            />

            <InputFile
              label="Ваше фото"
              id="file-upload"
              onChange={handleFileChange}
            />
          </div>

          <div className={styles.btnWrapper}>
            <Button color="green">Сохранить изменения</Button>
          </div>
        </form>
      </>
    </Layout>
  );
}

export default StudentProfile;
