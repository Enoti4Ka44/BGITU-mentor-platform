import Layout from "../../../components/layout/Layout";
import Input from "../../../components/ui/input/Input";
import Textarea from "../../../components/ui/textarea/Textarea";
import styles from "./StudentProfile.module.scss";
import InputFile from "../../../components/ui/inputFile/InputFile";
import ImageWrapper from "../../../components/ui/imageWrapper/ImageWrapper";
import Button from "../../../components/ui/button/Button";
import { useEffect, useState } from "react";
import { studentAPI } from "../../../services";

function StudentProfile(props) {
  const [studentData, setStudentData] = useState([]);
  const [avatarFile, setAvatarUrl] = useState(null);
  const [avatarUrl, setAvatarFile] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    telegramUrl: "",
    vkUrl: "",
    description: "",
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
    const file = e.target.file[0];
    if (file) {
      setAvatar(file);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const data =
  //   }
  // }

  return (
    <Layout>
      <>
        <h2>Профиль</h2>
        <form className={styles.form}>
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
              />
              <Input
                value={formData.lastName}
                name="lastName"
                id="lastName"
                type="text"
                required={true}
                label="Фамилия"
                placeholder="Фамилия"
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
              />
              <Input
                value={formData.vkUrl}
                name="vkUrl"
                id="vkUrl"
                type="text"
                label="Вконтакте"
                placeholder="Профиль ВК"
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
            />

            <InputFile label="Ваше фото" id="file-upload" />
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
