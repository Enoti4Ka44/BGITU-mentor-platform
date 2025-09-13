import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { authAPI } from "../../services/api/authAPI";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setIsLoading(true);

      const response = await authAPI.login(data.email, data.password);
      const role = response.role;

      if (role === "STUDENT") {
        navigate("/student-home");
      } else if (role === "MENTOR") {
        navigate("/mentor-home");
      }

      toast.success("Вход в аккаунт успешно выполнен!");
    } catch (error) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      toast.error(`${error}`);
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
