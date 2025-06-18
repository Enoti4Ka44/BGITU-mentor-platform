import { useState } from "react";
import AuthForm from "./AuthForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setIsLoading(true);
      await login(data.email, data.password);
      navigate("/home");
      toast.success("Вход в аккаунт успешно выполнен!");
    } catch (error) {
      toast.error("Ошибка при входе в аккаунт!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <AuthForm isLoading={isLoading} isLogin={true} onSubmit={handleSubmit} />
    </>
  );
}

export default Login;
