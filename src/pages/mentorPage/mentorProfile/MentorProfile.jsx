import Layout from "../../../components/layout/Layout";
import Input from "../../../components/ui/input/Input";
import Textarea from "../../../components/ui/textarea/Textarea";
import styles from "./MentorProfile.module.scss";
import InputFile from "../../../components/ui/inputFile/InputFile";
import ImageWrapper from "../../../components/ui/imageWrapper/ImageWrapper";
import Button from "../../../components/ui/button/Button";
import { mentorProfileAPI } from "../../../services";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import StarIcon from "../../../assets/images/icons/star-icon.png";

function MentorProfile() {
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    description: "",
    vkUrl: "",
    telegramUrl: "",
    speciality: "",
    rank: null,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await mentorProfileAPI.getMentorSummary();
        setFormData({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          description: data.description || "",
          vkUrl: data.vkUrl || "",
          telegramUrl: data.telegramUrl || "",
          speciality: data.speciality || "",
          rank: data.rank || null,
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
            speciality: formData.speciality,
            rank: Number(formData.rank),
          }),
        ],
        { type: "application/json" }
      );

      dataToSend.append("card", cardBlob);

      if (avatarFile) {
        dataToSend.append("avatar", avatarFile);
      }

      const response = await mentorProfileAPI.patchMentorSummary(dataToSend);
      toast.success("Данные успешно обновлены");
      console.log("Данные успешно обновлены:", response);
    } catch (error) {
      console.error("Ошибка при обновлении:", error);
    }
  };

  return (
    <Layout>
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

            <p className={styles.rank}>
              Мой рейтинг:{" "}
              <span>
                {formData.rank} <img src={StarIcon} alt="" />
              </span>
            </p>
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
            <ImageWrapper imageUrl={avatarUrl} />
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
    </Layout>
  );
}

export default MentorProfile;
