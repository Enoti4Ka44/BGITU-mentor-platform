import styles from "./PostArticle.module.scss";
import Input from "../../../components/ui/input/Input";
import InputSelect from "../../../components/ui/inputSelect/InputSelect";
import Textarea from "../../../components/ui/textarea/Textarea";
import InputFile from "../../../components/ui/inputFile/InputFile";
import Layout from "../../../components/layout/Layout";
import Button from "../../../components/ui/button/Button";
import { toast } from "react-toastify";
import { articlesAPI, specialitiesAPI } from "../../../services";
import { useState, useEffect } from "react";

function PostArticle({ props, specialities }) {
  const [allSpecialities, setAllSpecialities] = useState([]);
  const [articleImage, setArticleImage] = useState(null);
  const [articleData, setArticleData] = useState({
    title: "",
    content: "",
    speciality: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await specialitiesAPI.getAllSpecialities();
        setAllSpecialities(data);
      } catch (error) {
        console.log("Ошибка при загрузке данных", error);
      }
    };
    fetchData();
  }, []);

  const specialityOptions = allSpecialities.map((spec) => ({
    value: spec.id,
    label: spec.name,
  }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(articleData.speciality);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArticleImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = new FormData();

      const articleBlob = new Blob(
        [
          JSON.stringify({
            title: articleData.title,
            content: articleData.content,
            specialityId: Number(articleData.speciality),
          }),
        ],
        { type: "application/json" }
      );

      dataToSend.append("data", articleBlob, "data.json");

      if (articleImage) {
        dataToSend.append("image", articleImage);
      }

      const response = await articlesAPI.postArticle(dataToSend);
      toast.success("Статья успешно опубликована");
    } catch (error) {
      console.error("Ошибка при публикации статьи:", error);
    }
  };

  return (
    <Layout>
      <h2>Написать статью</h2>
      <form className={styles.articleForm} onSubmit={handleSubmit}>
        <Input
          value={articleData.title}
          name="title"
          type="text"
          required={true}
          placeholder="Введите название статьи"
          label="Название"
          minLength="5"
          onChange={handleInputChange}
        />

        <InputSelect
          value={articleData.speciality}
          options={specialityOptions}
          name="speciality"
          required={true}
          label="Категория"
          placeholder="Выберите категорию"
          onChange={handleInputChange}
        />

        <Textarea
          value={articleData.content}
          name="content"
          type="text"
          required={true}
          placeholder="Введите текст статьи"
          label="Текст"
          minLength="100"
          onChange={handleInputChange}
        />

        <InputFile label="Фото" onChange={handleFileChange} />

        <div className={styles.btnWrapper}>
          <Button color="green">Опубликовать статью</Button>
        </div>
      </form>
    </Layout>
  );
}

export default PostArticle;
