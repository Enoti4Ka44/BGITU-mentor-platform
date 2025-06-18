import { useState } from "react";
import AuthForm from "./AuthForm";
import { register } from "./authServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await register(
        data.firstName,
        data.lastName,
        data.email,
        data.password,
        data.role
      );
      navigate("/login");
      toast.success("Регистрация успешно выполнена!");
    } catch (error) {
      toast.error("Ошибка при регистрации!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Регистрация</h1>
      <AuthForm isLoading={isLoading} isLogin={false} onSubmit={handleSubmit} />
    </>
  );
}

export default Register;
