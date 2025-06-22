import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { login } from "../../services/api/authServices";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setIsLoading(true);

      const response = await login(data.email, data.password);
      const role = response.role;

      if (role === "ROLE_STUDENT") {
        navigate("/studentHome");
      } else if (role === "ROLE_MENTOR") {
        navigate("/mentorHome");
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
