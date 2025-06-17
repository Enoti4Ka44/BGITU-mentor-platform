import { useState } from "react";
import AuthForm from "./AuthForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate("/home");
      toast.success("Вход в аккаунт успешно выполнен!");
    } catch (error) {
      toast.error("Ошибка при входе в аккаунт!");
    }
  };
  return (
    <>
      <AuthForm isLogin={true} onSubmit={handleSubmit} />
    </>
  );
}

export default Login;
