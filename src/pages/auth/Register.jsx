import AuthForm from "./AuthForm";
import { register } from "./authServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
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
    }
  };

  return (
    <>
      <h1>Регистрация</h1>
      <AuthForm isLogin={false} onSubmit={handleSubmit} />
    </>
  );
}

export default Register;
