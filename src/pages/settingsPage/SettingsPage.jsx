import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { profilesAPI } from "../../services";
import Input from "../../components/ui/input/Input";
import Button from "../../components/ui/button/Button";
import { toast } from "react-toastify";

function SettingsPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const role = localStorage.getItem("role");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await profilesAPI.getProfile(role);
        setFormData({
          email: data.email || "",
          password: data.password || "",
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [role]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await profilesAPI.patchProfile(role, formData);
      toast.success("Почта успешно изменена");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <h2>Профиль</h2>
      <form onSubmit={handleSubmit}>
        <Input
          value={formData.email}
          name="email"
          type="email"
          label="Почта"
          placeholder="example@gmail.com"
          onChange={handleInputChange}
        />
        <Input
          value={formData.password}
          name="password"
          type="password"
          placeholder="******"
          label="Пароль"
          onChange={handleInputChange}
        />

        <Button color="green">Сохранить</Button>
      </form>
    </Layout>
  );
}

export default SettingsPage;
